<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Service;

use Craft;
use craft\base\Component;
use craft\base\ElementInterface;
use craft\base\FieldInterface;
use craft\helpers\ArrayHelper;
use craft\helpers\DateTimeHelper;
use craft\helpers\Db;
use DateTime;
use DateTimeZone;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Model\OccurrenceModel;
use Gewerk\RecurringDates\Plugin;
use Gewerk\RecurringDates\Record\OccurrenceRecord;
use Throwable;
use yii\base\InvalidArgumentException;

/**
 * All occurrence related services.
 *
 * @package Gewerk\RecurringDates\Service
 */
class OccurrenceService extends Component
{
    /**
     * Gets the next occurrence
     *
     * @param ElementInterface $element
     * @param string|int|FieldInterface $field
     * @return OccurrenceModel|null
     */
    public function getNextOccurrence(ElementInterface $element, $field): ?OccurrenceModel
    {
        $occurrences = $this->getOccurrences($element, $field);

        return ArrayHelper::firstValue($occurrences);
    }

    /**
     * Gets the next occurrence or the last occurrence, if event is in the past.
     *
     * @param ElementInterface $element
     * @param string|int|FieldInterface $field
     * @return OccurrenceModel|null
     */
    public function getNextOrLastOccurrence(ElementInterface $element, $field): ?OccurrenceModel
    {
        $nextOccurrence = $this->getNextOccurrence($element, $field);

        if ($nextOccurrence) {
            return $nextOccurrence;
        }

        $allOccurrences = $this->getOccurrences($element, $field, false);

        return array_pop($allOccurrences);
    }

    /**
     * Gets all occurrences
     *
     * @param ElementInterface $element
     * @param string|int|FieldInterface $field
     * @param bool $onlyFutureOccurrences
     * @return array
     */
    public function getOccurrences(ElementInterface $element, $field, bool $onlyFutureOccurrences = true): array
    {
        $field = $this->normalizeField($field);

        // Get occurrences
        $query = OccurrenceRecord::find()
            ->where([
                'fieldId' => $field->id,
                'elementId' => $element->id,
                'siteId' => $element->siteId,
            ])
            ->orderBy(['startDate' => 'ASC']);

        if ($onlyFutureOccurrences) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $query->andWhere(
                Db::parseDateParam('startDate', $utcNow, '>=')
            );
        }

        // Convert to models
        $occurrences = [];
        foreach ($query->all() as $record) {
            /** @var OccurrenceRecord $record */
            $occurrence = new OccurrenceModel();
            $occurrence->startDate = DateTimeHelper::toDateTime($record->startDate);
            $occurrence->endDate = DateTimeHelper::toDateTime($record->endDate);
            $occurrence->allDay = (bool) $record->allDay;
            $occurrence->owner = Craft::$app->getElements()->getElementById(
                $record->dateId,
                RecurringDateElement::class,
                $element->siteId
            );

            $occurrences[] = $occurrence;
        }

        return $occurrences;
    }

    /**
     * Creates all occurrences
     *
     * @param ElementInterface $element
     * @param string $fieldHandle
     * @param bool $onlyFutureOccurrences
     * @return void
     */
    public function createOccurrences(ElementInterface $element, string $fieldHandle, bool $onlyFutureOccurrences = true)
    {
        /** @var RecurringDatesField */
        $field = Craft::$app->getFields()->getFieldByHandle($fieldHandle);

        /** @var RecurringDateElementQuery */
        $query = $element->getFieldValue($fieldHandle);

        /** @var OccurrenceModel[] */
        $occurrences = [];
        foreach ($query->all() as $recurringDate) {
            $occurrences = array_merge(
                $occurrences,
                $recurringDate->getOccurrences($onlyFutureOccurrences)
            );
        }

        // Get occurrences from database
        $savedOccurrencesQuery = OccurrenceRecord::find()
            ->where([
                'fieldId' => $field->id,
                'elementId' => $element->id,
                'siteId' => $element->siteId,
            ]);

        if ($onlyFutureOccurrences) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $savedOccurrencesQuery->andWhere(
                Db::parseDateParam('startDate', $utcNow, '>=')
            );
        }

        $savedOccurrences = $savedOccurrencesQuery->all();

        // Remove occurrences that are already saved
        $unsavedOccurrences = [];
        foreach ($occurrences as $index => $occurrence) {
            $matches = ArrayHelper::whereMultiple($savedOccurrences, [
                'dateId' => $occurrence->owner->id,
                'startDate' => Db::prepareDateForDb($occurrence->startDate),
                'endDate' => Db::prepareDateForDb($occurrence->endDate),
                'allDay' => (int) $occurrence->allDay,
            ]);

            if (count($matches) > 0) {
                unset($occurrences[$index]);

                $keys = array_keys($matches);
                unset($savedOccurrences[$keys[0]]);
            } else {
                $unsavedOccurrences[] = [
                    'dateId' => $occurrence->owner->id,
                    'elementId' => $element->id,
                    'siteId' => $element->siteId,
                    'fieldId' => $field->id,
                    'startDate' => Db::prepareDateForDb($occurrence->startDate),
                    'endDate' => Db::prepareDateForDb($occurrence->endDate),
                    'allDay' => (int) $occurrence->allDay,
                ];
            }
        }

        $transaction = Craft::$app->getDb()->beginTransaction();

        try {
            // Remove no more needed occurrences
            if (count($savedOccurrences) > 0) {
                Db::delete(
                    Plugin::OCCURRENCES_TABLE,
                    ['id' => ArrayHelper::getColumn($savedOccurrences, 'id')]
                );
            }

            // Batch insert missing occurrences
            Db::batchInsert(
                Plugin::OCCURRENCES_TABLE,
                ['dateId', 'elementId', 'siteId', 'fieldId', 'startDate', 'endDate', 'allDay'],
                array_map('array_values', $unsavedOccurrences)
            );

            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();

            throw $e;
        }
    }

    /**
     * Normalizes field value
     *
     * @param string|int|FieldInterface $field
     * @return RecurringDatesField
     */
    private function normalizeField($field): RecurringDatesField
    {
        if (is_numeric($field)) {
            $field = Craft::$app->getFields()->getFieldById($field);
        } elseif (is_string($field)) {
            $field = Craft::$app->getFields()->getFieldByHandle($field);
        }

        if (!($field instanceof RecurringDatesField)) {
            throw new InvalidArgumentException("The field isn't a Recurring Date field.");
        }

        return $field;
    }
}
