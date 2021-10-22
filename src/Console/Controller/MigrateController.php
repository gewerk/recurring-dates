<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Console\Controller;

use Craft;
use craft\console\Controller;
use craft\db\Query;
use craft\db\Table;
use craft\helpers\Console;
use craft\helpers\Json;
use craft\queue\Queue;
use craft\services\Elements;
use craft\services\Fields;
use DateTime;
use DateTimeZone;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Job\CreateOccurrencesJob;
use Gewerk\RecurringDates\Plugin;
use Recurr\DateExclusion;
use Recurr\Rule;
use yii\base\InvalidArgumentException;
use yii\console\ExitCode;

/**
 * Provides migration helpers for outer datetime based fields.
 *
 * @package Gewerk\RecurringDates\Console\Controller
 */
class MigrateController extends Controller
{
    /**
     * Migrates field values from Calendarize fields
     *
     * @param string $sourceFieldHandle Handle of the Calendarize field.
     * @param string $targetFieldHandle Handle of the Recurring Dates field.
     * @return int
     */
    public function actionFromCalendarize(string $sourceFieldHandle, string $targetFieldHandle)
    {
        $weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

        /** @var Fields */
        $fieldsService = Craft::$app->getFields();

        /** @var Elements */
        $elementsService = Craft::$app->getElements();

        /** @var Queue */
        $queue = Craft::$app->getQueue();

        // Resolve source field
        $sourceField = $fieldsService->getFieldByHandle($sourceFieldHandle);
        if (!$sourceField || get_class($sourceField) !== 'unionco\\calendarize\\fields\\CalendarizeField') {
            throw new InvalidArgumentException("Source field '{$sourceFieldHandle}' doesn't exists or isn't a Calendarize field.");
        }

        // Resolve target field
        $targetField = $fieldsService->getFieldByHandle($targetFieldHandle);
        if (!$targetField || !($targetField instanceof RecurringDatesField)) {
            throw new InvalidArgumentException("Source field '{$targetFieldHandle}' doesn't exists or isn't a Calendar Dates Field.");
        }

        // Get calendarize data
        $calendarizeRecords = (new Query())
            ->from('{{%calendarize}}')
            ->where([
                'fieldId' => $sourceField->id,
            ])
            ->all();

        // Create records for target field
        $total = count($calendarizeRecords);
        Console::startProgress(0, $total, 'Migration: ');

        foreach ($calendarizeRecords as $index => $calendarizeRecord) {
            // Empty start date? Skip!
            if (!$calendarizeRecord['startDate']) {
                Console::updateProgress($index, $total);
                continue;
            }

            // Check if a record already exists
            $count = (new Query())
                ->from(Plugin::DATES_TABLE)
                ->innerJoin(Table::ELEMENTS, '[[elements.id]] = [[recurring_dates.ownerId]]')
                ->innerJoin(Table::ELEMENTS_SITES, '[[elements_sites.elementId]] = [[elements.id]]')
                ->where([
                    '[[recurring_dates.ownerId]]' => $calendarizeRecord['ownerId'],
                    '[[elements_sites.siteId]]' => $calendarizeRecord['ownerSiteId'],
                ])
                ->count();

            if ($count > 0) {
                Console::updateProgress($index, $total);
                continue;
            }

            // Add types
            $calendarizeRecord = $this->typizeCalendarizeRecord($calendarizeRecord);

            // Create new record
            $recurringDate = new RecurringDateElement();
            $recurringDate->fieldId = $targetField->id;
            $recurringDate->sortOrder = 0;
            $recurringDate->siteId = $calendarizeRecord['ownerSiteId'];
            $recurringDate->ownerId = $calendarizeRecord['ownerId'];
            $recurringDate->startDate = $calendarizeRecord['startDate'];
            $recurringDate->endDate = $calendarizeRecord['endDate'];
            $recurringDate->allDay = $calendarizeRecord['allDay'];

            // Convert repeat rule
            if ($calendarizeRecord['repeats']) {
                $rrule = new Rule();
                $rrule->setInterval($calendarizeRecord['repeatType'] === 'biweekly' ? 2 : 1);
                $rrule->setUntil($calendarizeRecord['endRepeatDate']);
                $rrule->setFreq($calendarizeRecord['repeatType'] === 'biweekly' ? 'WEEKLY' : strtoupper($calendarizeRecord['repeatType']));

                if ($rrule->getFreq() === 'WEEKLY') {
                    $rrule->setByDay(array_map(function ($day) use ($weekdays) {
                        return $weekdays[$day];
                    }, array_keys($calendarizeRecord['days'] ?? [])));
                } elseif ($rrule->getFreq() === 'MONTHLY' && $calendarizeRecord['days'] === 'onMonthDay') {
                    $position = $this->weekOfMonth($recurringDate->startDate);
                    $day = $weekdays[$this->startDate->format('w')];

                    $rrule->setBySetPosition([$position]);
                    $rrule->setByDay([$day]);
                }

                if (is_array($calendarizeRecord['exceptions'])) {
                    $exceptions = [];

                    foreach ($calendarizeRecord['exceptions'] as $exception) {
                        $exceptions[] = new DateExclusion($exception, false);
                    }

                    $rrule->setExDates($exceptions);
                }

                $recurringDate->rrule = $rrule->getString();
            }

            // Save calendar entry
            $elementsService->saveElement($recurringDate);

            // Push job
            $queue->push(new CreateOccurrencesJob([
                'elementType' => $elementsService->getElementTypeById($calendarizeRecord['ownerId']),
                'elementId' => (int) $calendarizeRecord['ownerId'],
                'siteId' => (int) $calendarizeRecord['ownerSiteId'],
                'fieldHandle' => $targetFieldHandle,
                'onlyFutureOccurrences' => false,
            ]));
        }

        Console::endProgress('Done.' . PHP_EOL);

        return ExitCode::OK;
    }

    /**
     * Converts string values in correct typed values
     *
     * @param array $record Calendarize record
     * @return array
     */
    private function typizeCalendarizeRecord(array $record): array
    {
        $typedRecord = [];

        // Map values
        foreach ($record as $key => $value) {
            switch ($key) {
                case 'startDate':
                case 'endDate':
                case 'endRepeatDate':
                    $typedRecord[$key] = $this->convertDate($value);
                    break;
                case 'exceptions':
                    $value = is_string($value) ? Json::decode($value) : $value;
                    $typedRecord[$key] = array_map(function ($e) {
                        return $this->convertDate($e);
                    }, $value ?? []);
                    break;
                case 'timeChanges':
                    $value = is_string($value) ? Json::decode($value) : $value;
                    $typedRecord[$key] = array_map(function ($e) {
                        return $this->convertDate($e);
                    }, $value ?? []);
                    break;
                case 'days':
                    $typedRecord[$key] = is_string($value) && isset($value) ? Json::decode($value) : $value;
                    break;
                case 'allDay':
                case 'repeats':
                    $typedRecord[$key] = boolval($value);
                    break;
                default:
                    $typedRecord[$key] = $value;
                    break;
            }
        }

        // Need to enforce an end date
        if (empty($typedRecord['endDate']) || !($typedRecord['endDate'] instanceof DateTime)) {
            $typedRecord['endDate'] = $typedRecord['startDate'];
        }

        return $typedRecord;
    }

    /**
     * Converts database date into an DateTime object
     *
     * @param string $date
     * @return DateTime|null
     */
    private function convertDate(string $date = null): ?DateTime
    {
        $datetime = $date ? DateTime::createFromFormat(
            'Y-m-d H:i:s',
            $date,
            new DateTimeZone('utc')
        ) : false;

        if (!$datetime) {
            return null;
        }

        return $datetime;
    }

    /**
     * Gets the week order (first, second, …) from a DateTime
     *
     * @param null|DateTime $date
     * @return string
     */
    private function weekOfMonth(?DateTime $date): string
    {
        if (!$date) {
            return '';
        }

        $prefixes = [1, 2, 3, 4, -1];

        return $prefixes[floor($date->format('j') / 7)];
    }
}
