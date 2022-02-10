<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Element;

use Craft;
use craft\base\BlockElementInterface;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\elements\db\ElementQueryInterface;
use craft\helpers\ArrayHelper;
use craft\helpers\Db;
use craft\helpers\ElementHelper;
use DateTime;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Model\OccurrenceModel;
use Gewerk\RecurringDates\Plugin;
use Gewerk\RecurringDates\Record\OccurrenceRecord;
use Gewerk\RecurringDates\Record\RecurringDateRecord;
use JsonSerializable;
use Recurr\DateExclusion;
use Recurr\Rule;
use Recurr\Transformer\ArrayTransformer;
use Recurr\Transformer\Constraint\AfterConstraint;
use yii\base\Exception;
use yii\base\InvalidConfigException;

/**
 * A recurring date element
 *
 * @package Gewerk\RecurringDates\Element
 */
class RecurringDateElement extends Element implements BlockElementInterface, JsonSerializable
{
    /**
     * @var int|null Field ID
     */
    public $fieldId;

    /**
     * @var int|null Owner ID
     */
    public $ownerId;

    /**
     * @var int|null Sort order
     */
    public $sortOrder;

    /**
     * @var DateTime|null Starting date
     */
    public $startDate;

    /**
     * @var DateTime|null Ending date
     */
    public $endDate;

    /**
     * @var bool Is this an all day event
     */
    public $allDay = false;

    /**
     * @var string|null Recurring rule
     */
    public $rrule;

    /**
     * @var int|null
     */
    public $count;

    /**
     * @var DateTime|null
     */
    public $untilDate;

    /**
     * @var bool Whether the block was deleted along with its owner
     * @see beforeDelete()
     */
    public $deletedWithOwner = false;

    /**
     * @var bool Whether the block has changed.
     * @internal
     */
    public $dirty = false;

    /**
     * @var ElementInterface|null The owner element, or false if [[ownerId]] is invalid
     */
    private $_owner;

    /**
     * @var Rule|null
     */
    private $_rruleInstance = null;

    /**
     * @inheritdoc
     */
    public static function hasContent(): bool
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public static function isLocalized(): bool
    {
        return true;
    }

    /**
     * @inheritdoc
     */
    public static function trackChanges(): bool
    {
        return true;
    }

    /**
     * @inheritdoc
     * @return RecurringDateElementQuery
     */
    public static function find(): ElementQueryInterface
    {
        return new RecurringDateElementQuery(self::class);
    }

    /**
     * @inheritdoc
     */
    public function getSupportedSites(): array
    {
        try {
            $owner = $this->getOwner();
        } catch (InvalidConfigException $e) {
            $owner = $this->duplicateOf;
        }

        if (!$owner) {
            if ($this->siteId) {
                return [$this->siteId];
            } else {
                return [Craft::$app->getSites()->getPrimarySite()->id];
            }
        }

        return ArrayHelper::getColumn(ElementHelper::supportedSitesForElement($owner), 'siteId');
    }

    /**
     * @inheritdoc
     */
    public function datetimeAttributes(): array
    {
        $attributes = parent::datetimeAttributes();
        $attributes[] = 'startDate';
        $attributes[] = 'endDate';
        $attributes[] = 'untilDate';

        return $attributes;
    }

    /**
     * Sets all day
     *
     * @param bool $allDay
     * @return void
     */
    public function setAllDay(bool $allDay = false)
    {
        $this->allDay = $allDay;
        $this->normalizeTime();
    }

    /**
     * Sets the start date
     *
     * @param DateTime|null $startDate
     * @return void
     */
    public function setStartDate(?DateTime $startDate = null)
    {
        $this->startDate = $startDate;
        $this->normalizeTime();
    }

    /**
     * Sets the end date
     *
     * @param DateTime|null $endDate
     * @return void
     */
    public function setEndDate(?DateTime $endDate = null)
    {
        $this->endDate = $endDate;
        $this->normalizeTime();
    }

    /**
     * Sets the rrule
     *
     * @param string|null $rrule
     */
    public function setRrule(string $rrule = null)
    {
        $this->rrule = $rrule;
        $this->_rruleInstance = null;

        if ($rruleInstance = $this->getRruleInstance()) {
            $this->count = $rruleInstance->getCount();
            $this->untilDate = $rruleInstance->getUntil();
        } else {
            $this->count = null;
            $this->untilDate = null;
        }
    }

    /**
     * Sets the owner
     *
     * @param ElementInterface|null $owner
     */
    public function setOwner(ElementInterface $owner = null)
    {
        $this->_owner = $owner;
    }

    /**
     * @inheritdoc
     */
    public function getOwner(): ElementInterface
    {
        if ($this->_owner === null) {
            if ($this->ownerId === null) {
                throw new InvalidConfigException('Recurring Date entry is missing its owner ID');
            }

            if (($this->_owner = Craft::$app->getElements()->getElementById($this->ownerId, null, $this->siteId)) === null) {
                throw new InvalidConfigException("Invalid owner ID: {$this->ownerId}");
            }
        }

        return $this->_owner;
    }

    /**
     * Get rule instance from rrule string
     *
     * @return Rule|null
     */
    public function getRruleInstance(): ?Rule
    {
        if ($this->rrule) {
            $this->_rruleInstance = new Rule(
                $this->rrule,
                $this->startDate,
                $this->endDate,
                Craft::$app->getTimeZone()
            );
        }

        return $this->_rruleInstance;
    }

    /**
     * Returns the first occurrence.
     *
     * @return OccurrenceModel
     */
    public function getFirstOccurrence(): OccurrenceModel
    {
        return new OccurrenceModel([
            'owner' => $this,
            'startDate' => $this->startDate,
            'endDate' => $this->endDate,
            'allDay' => $this->allDay,
            'first' => true,
        ]);
    }

    /**
     * Get all occurrences
     *
     * @param bool $onlyFutureOccurrences
     * @param bool $includeFirstOccurrence
     * @return OccurrenceModel[]
     */
    public function getOccurrences(bool $onlyFutureOccurrences = true, bool $includeFirstOccurrence = true)
    {
        $now = new DateTime();

        /** @var OccurrenceModel[] */
        $occurrences = [];

        if ($includeFirstOccurrence && (!$onlyFutureOccurrences || $this->endDate > $now)) {
            $occurrences[] = $this->getFirstOccurrence();
        }

        if ($rrule = $this->getRruleInstance()) {
            $transformer = new ArrayTransformer();
            $endDatePlusOne = (clone $this->endDate)->modify('+1 second');
            $occurrencesAfter = $onlyFutureOccurrences && $this->endDate < $now ? $now : $endDatePlusOne;
            $constraint = new AfterConstraint($occurrencesAfter, true);
            $recurrences = $transformer->transform($rrule, $constraint);

            foreach ($recurrences as $recurrence) {
                $occurrences[] = new OccurrenceModel([
                    'owner' => $this,
                    'startDate' => $recurrence->getStart(),
                    'endDate' => $recurrence->getEnd(),
                    'allDay' => $this->allDay,
                ]);
            }
        }

        return $occurrences;
    }

    /**
     * @inheritdoc
     */
    public function afterSave(bool $isNew)
    {
        // Get the entry record
        if (!$isNew) {
            $record = RecurringDateRecord::findOne($this->id);

            if (!$record) {
                throw new Exception("Invalid entry ID: {$this->id}");
            }
        } else {
            $record = new RecurringDateRecord();
            $record->id = (int) $this->id;
        }

        // Normalize time for all day entries
        $this->normalizeTime();

        // Set attributes
        $record->ownerId = (int) $this->getOwner()->id;
        $record->fieldId = $this->fieldId;
        $record->startDate = $this->startDate;
        $record->endDate = $this->endDate;
        $record->allDay = (bool) $this->allDay;
        $record->rrule = $this->rrule;
        $record->count = $this->count;
        $record->untilDate = $this->untilDate;

        // Save record
        $record->save(false);

        // Get the occurrence record
        if (!$isNew) {
            $occurrenceRecord = OccurrenceRecord::findOne([
                'dateId' => $this->id,
                'elementId' => $this->getOwner()->id,
                'siteId' => $this->getOwner()->siteId,
                'fieldId' => $this->fieldId,
                'first' => true,
            ]);

            if (!$occurrenceRecord) {
                throw new Exception('First occurrence not found.');
            }
        } else {
            $occurrenceRecord = new OccurrenceRecord();
            $occurrenceRecord->dateId = $this->id;
            $occurrenceRecord->elementId = $this->getOwner()->id;
            $occurrenceRecord->siteId = $this->getOwner()->siteId;
            $occurrenceRecord->fieldId = $this->fieldId;
            $occurrenceRecord->first = true;
        }

        $occurrenceRecord->startDate = $this->startDate;
        $occurrenceRecord->endDate = $this->endDate;
        $occurrenceRecord->allDay = $this->allDay;

        // Save first occurrence
        $occurrenceRecord->save(false);

        parent::afterSave($isNew);
    }

    /**
     * @inheritdoc
     */
    public function jsonSerialize()
    {
        $json = [
            'id' => (string) $this->id,
            'allDay' => (boolean) $this->allDay,
            'startDate' => $this->startDate->format(DateTime::ISO8601),
            'endDate' => $this->endDate->format(DateTime::ISO8601),
        ];

        if ($rrule = $this->getRruleInstance()) {
            $repeat = [
                'frequency' => $rrule->getFreqAsText(),
                'endsAfter' => 'never',
                'exceptions' => array_map(function (DateExclusion $exDate) {
                    return $exDate->date->format(DateTime::ISO8601);
                }, $rrule->getExDates()),
                'interval' => $rrule->getInterval(),
                'day' => $rrule->getByDay(),
                'month' => $rrule->getByMonth(),
                'monthDay' => $rrule->getByMonthDay(),
                'position' => $rrule->getBySetPosition(),
            ];

            if ($onDate = $rrule->getUntil()) {
                $repeat['endsAfter'] = 'onDate';
                $repeat['endsOn'] = $onDate->format(DateTime::ISO8601);
            } elseif ($count = $rrule->getCount()) {
                $repeat['endsAfter'] = 'after';
                $repeat['count'] = $count;
            }

            $json['repeat'] = $repeat;
        }

        return $json;
    }

    /**
     * Normalizes time for all day entries
     *
     * @return void
     */
    private function normalizeTime()
    {
        if ($this->allDay) {
            $this->startDate->setTime(0, 0, 0);
            $this->endDate->setTime(23, 59, 59);
        }
    }
}
