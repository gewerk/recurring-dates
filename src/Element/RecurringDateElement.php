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
use craft\db\Query;
use craft\elements\db\ElementQueryInterface;
use craft\helpers\ArrayHelper;
use craft\helpers\Db;
use craft\helpers\ElementHelper;
use craft\validators\DateTimeValidator;
use DateTime;
use DateTimeInterface;
use DateTimeZone;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Model\Occurrence;
use Gewerk\RecurringDates\Plugin;
use Gewerk\RecurringDates\Record\RecurringDateRecord;
use JsonSerializable;
use Recurr\DateExclusion;
use Recurr\Rule;
use yii\base\Exception;
use yii\base\InvalidConfigException;

/**
 * A recurring date element
 *
 * @property-read bool $isMultiDay
 * @package Gewerk\RecurringDates\Element
 */
class RecurringDateElement extends Element implements BlockElementInterface, JsonSerializable
{
    /**
     * @var int|null Field ID
     */
    public ?int $fieldId = null;

    /**
     * @var int|null Owner ID
     */
    public ?int $ownerId = null;

    /**
     * @var int|null Sort order
     */
    public ?int $sortOrder = null;

    /**
     * @var DateTime|null Starting date
     */
    public ?DateTime $startDate = null;

    /**
     * @var DateTime|null Ending date
     */
    public ?DateTime $endDate = null;

    /**
     * @var bool Is this an all day event
     */
    public bool $allDay = false;

    /**
     * @var string|null Recurring rule
     */
    public ?string $rrule = null;

    /**
     * @var int|null
     */
    public ?int $count = null;

    /**
     * @var DateTime|null
     */
    public ?DateTime $untilDate = null;

    /**
     * @var bool Whether the block was deleted along with its owner
     * @see beforeDelete()
     */
    public bool $deletedWithOwner = false;

    /**
     * @var bool Whether the block has changed.
     * @internal
     */
    public bool $dirty = false;

    /**
     * @var ElementInterface|null The owner element, or false if [[ownerId]] is invalid
     */
    private ?ElementInterface $owner;

    /**
     * @var Rule|null
     */
    private ?Rule $rruleInstance = null;

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
     * @return int[]
     */
    public function getSupportedSites(): array
    {
        try {
            $owner = $this->getOwner();
        } catch (InvalidConfigException) {
            $owner = $this->duplicateOf;
        }

        if (!$owner) {
            if ($this->siteId) {
                return [$this->siteId];
            } else {
                return [(int) Craft::$app->getSites()->getPrimarySite()->id];
            }
        }

        return ArrayHelper::getColumn(ElementHelper::supportedSitesForElement($owner), 'siteId');
    }

    /**
     * @inheritdoc
     * @return array<string, string>
     */
    public function attributeLabels(): array
    {
        $attributes = parent::attributeLabels();
        $attributes['startDate'] = Craft::t('recurring-dates', 'Start date');
        $attributes['endDate'] = Craft::t('recurring-dates', 'End date');

        return $attributes;
    }

    /**
     * Sets all day
     *
     * @param bool $allDay
     * @return void
     */
    public function setAllDay(bool $allDay = false): void
    {
        $this->allDay = $allDay;
    }

    /**
     * Sets the start date
     *
     * @param DateTime|null $startDate
     * @return void
     */
    public function setStartDate(?DateTime $startDate = null): void
    {
        $this->startDate = $startDate;
    }

    /**
     * Sets the end date
     *
     * @param DateTime|null $endDate
     * @return void
     */
    public function setEndDate(?DateTime $endDate = null): void
    {
        $this->endDate = $endDate;
    }

    /**
     * Returns if date is an multi day event
     *
     * @return bool
     */
    public function getIsMultiDay(): bool
    {
        if ($this->startDate && $this->endDate) {
            return $this->startDate->format('Y-m-d') !== $this->endDate->format('Y-m-d');
        }

        return false;
    }

    /**
     * Sets the rrule
     *
     * @param string|null $rrule
     * @return void
     */
    public function setRrule(string $rrule = null): void
    {
        $this->rrule = $rrule;
        $this->rruleInstance = null;

        $rruleInstance = $this->getRruleInstance();

        if ($until = $rruleInstance?->getUntil()) {
            $this->count = $rruleInstance->getCount();
            $this->untilDate = DateTime::createFromInterface($until);
        } else {
            $this->count = null;
            $this->untilDate = null;
        }
    }

    /**
     * Sets the owner
     *
     * @param ElementInterface|null $owner
     * @return void
     */
    public function setOwner(ElementInterface $owner = null): void
    {
        $this->owner = $owner;
    }

    /**
     * @inheritdoc
     */
    public function getOwner(): ElementInterface
    {
        if (!isset($this->owner)) {
            if ($this->ownerId === null) {
                throw new InvalidConfigException('Recurring Date entry is missing its owner ID');
            }

            // @phpstan-ignore-next-line
            $owner = Craft::$app->getElements()->getElementById(
                $this->ownerId,
                null,
                $this->siteId,
                ['trashed' => null]
            );

            if ($owner === null) {
                throw new InvalidConfigException("Invalid owner ID: {$this->ownerId}");
            }

            $this->owner = $owner;
        }

        return $this->owner;
    }

    /**
     * Get rule instance from rrule string
     *
     * @return Rule|null
     */
    public function getRruleInstance(): ?Rule
    {
        if ($this->rrule) {
            $this->rruleInstance = new Rule(
                $this->rrule,
                $this->startDate,
                $this->endDate,
                Craft::$app->getTimeZone()
            );
        }

        return $this->rruleInstance;
    }

    /**
     * Get all occurrences
     *
     * @param bool $onlyFutureOccurrences
     * @param bool $includeFirstOccurrence
     * @return Occurrence[]
     */
    public function getOccurrences(bool $onlyFutureOccurrences = true, bool $includeFirstOccurrence = true): array
    {
        $query = (new Query())
            ->select(['startDate', 'endDate', 'allDay'])
            ->from(Plugin::OCCURRENCES_TABLE)
            ->where([
                'dateId' => $this->id,
                'siteId' => $this->siteId,
            ])
            ->orderBy(['startDate' => 'ASC']);

        if ($onlyFutureOccurrences) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $query->andWhere(
                Db::parseDateParam('startDate', $utcNow, '>=')
            );
        }

        if (!$includeFirstOccurrence) {
            $query->andWhere(['first' => false]);
        }

        return array_map(function ($occurrence) {
            return new Occurrence($occurrence);
        }, $query->all());
    }

    /**
     * @inheritdoc
     */
    public function afterSave(bool $isNew): void
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

        // Set time for start and end date on all day events
        if ($this->allDay) {
            $this->startDate?->setTime(0, 0, 0);
            $this->endDate?->setTime(23, 59, 59);
        }

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

        // Delete occurrences
        Db::delete(Plugin::OCCURRENCES_TABLE, [
            'dateId' => $this->id,
            'siteId' => $this->siteId,
        ]);

        // Save occurrences
        if ($this->startDate instanceof DateTime && $this->endDate instanceof DateTime) {
            // Save new first occurrence
            Db::insert(Plugin::OCCURRENCES_TABLE, [
                'dateId' => $this->id,
                'elementId' => $this->getOwner()->id,
                'siteId' => $this->getOwner()->siteId,
                'fieldId' => $this->fieldId,
                'first' => (int) true,
                'startDate' => Db::prepareDateForDb($this->startDate),
                'endDate' => Db::prepareDateForDb($this->endDate),
                'allDay' => (int) $this->allDay,
            ]);

            // Create recurring occurrences
            if ($this->rrule) {
                Plugin::$plugin->getFieldService()->saveOccurrences($this);
            }
        }

        parent::afterSave($isNew);
    }

    /**
     * @inheritdoc
     */
    public function jsonSerialize(): mixed
    {
        $json = [
            'id' => (string) $this->id,
            'allDay' => (bool) $this->allDay,
            'startDate' => $this->startDate ? $this->startDate->format(DateTime::ISO8601) : null,
            'endDate' => $this->endDate ? $this->endDate->format(DateTime::ISO8601) : null,
        ];

        if ($rrule = $this->getRruleInstance()) {
            $repeat = [
                'frequency' => $rrule->getFreqAsText(),
                'endsAfter' => 'never',
                'exceptions' => array_map(function(DateExclusion $exDate) {
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
     * @inheritdoc
     */
    public function beforeDelete(): bool
    {
        if (!parent::beforeDelete()) {
            return false;
        }

        // Update the block record
        Db::update(Plugin::DATES_TABLE, [
            'deletedWithOwner' => Db::prepareValueForDb($this->deletedWithOwner),
        ], [
            'id' => $this->id,
        ], [], false);

        // Set occurrences to deleted
        Db::update(Plugin::OCCURRENCES_TABLE, [
            'deleted' => true,
        ], [
            'dateId' => $this->id,
            'siteId' => $this->siteId,
        ], [], false);

        return true;
    }

    /**
     * @inheritdoc
     */
    public function afterRestore(): void
    {
        parent::afterRestore();

        // Set occurrences to non-deleted
        Db::update(Plugin::OCCURRENCES_TABLE, [
            'deleted' => false,
        ], [
            'dateId' => $this->id,
            'siteId' => $this->siteId,
        ], [], false);
    }

    /**
     * @inheritdoc
     * @return array<int, mixed>
     */
    protected function defineRules(): array
    {
        $rules = parent::defineRules();

        $rules[] = [
            ['count'],
            'number',
            'integerOnly' => true,
            'skipOnEmpty' => true,
            'on' => [self::SCENARIO_DEFAULT, self::SCENARIO_LIVE],
        ];

        $rules[] = [
            ['startDate', 'endDate'],
            'required',
            'on' => [self::SCENARIO_DEFAULT, self::SCENARIO_LIVE],
        ];

        $rules[] = [
            ['startDate', 'endDate', 'untilDate'],
            DateTimeValidator::class,
            'on' => [self::SCENARIO_DEFAULT, self::SCENARIO_LIVE],
            'skipOnEmpty' => true,
        ];

        return $rules;
    }
}
