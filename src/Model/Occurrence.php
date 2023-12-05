<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Model;

use craft\base\Model;
use craft\helpers\DateTimeHelper;
use DateTime;
use Gewerk\RecurringDates\Plugin;
use IntlDateFormatter;

/**
 * An occurrence of a date
 *
 * @property-read bool $isPast Occurrence was in the past
 * @property-read bool $isUpcoming Occurrence is in the future
 * @property-read bool $isOngoing Occurrence is ongoing
 * @property-read bool $isAllDay Occurrence is all day
 * @property-read bool $isMultiDay Occurrence is on multiple days
 * @package Gewerk\RecurringDates\Model
 */
class Occurrence extends Model
{
    /**
     * @var DateTime
     */
    public DateTime $startDate;

    /**
     * @var DateTime
     */
    public DateTime $endDate;

    /**
     * @var bool
     */
    public bool $allDay = false;

    /**
     * Creates an instance from an array
     *
     * @param array $occurrence
     * @return Occurrence
     */
    public static function fromArray(array $occurrence): self
    {
        return new self([
            'startDate' => DateTimeHelper::toDateTime($occurrence['startDate']),
            'endDate' => DateTimeHelper::toDateTime($occurrence['endDate']),
            'allDay' => (bool) $occurrence['allDay'],
        ]);
    }

    /**
     * Returns if this occurrence is an all day occurrence
     *
     * @return bool
     */
    public function getIsAllday(): bool
    {
        return $this->allDay;
    }

    /**
     * Returns if this occurrence was in the past
     *
     * @return bool
     */
    public function getIsPast(): bool
    {
        $now = DateTimeHelper::toDateTime('now');

        return $this->startDate <= $now;
    }

    /**
     * Returns if this occurrence is in the future
     *
     * @return bool
     */
    public function getIsUpcoming(): bool
    {
        $now = DateTimeHelper::toDateTime('now');

        return $this->startDate > $now;
    }

    /**
     * Returns if this occurrence is ongoing
     *
     * @return bool
     */
    public function getIsOngoing(): bool
    {
        $now = DateTimeHelper::toDateTime('now');

        return $this->startDate <= $now && $now < $this->endDate;
    }

    /**
     * Returns if occurrence is an multi day event
     *
     * @return bool
     */
    public function getIsMultiDay(): bool
    {
        return $this->startDate->format('Y-m-d') !== $this->endDate->format('Y-m-d');
    }

    /**
     * Formats an occurrence
     *
     * @param array{
     *  dateFormat?: string|int,
     *  timeFormat?: string|int,
     *  locale?: string|null,
     *  rangeSeparator?: string,
     *  dateTimeSeparator?: string,
     * } $configuration
     * @return string
     */
    public function format(array $configuration = []): string
    {
        $defaults = [
            'dateFormat' => IntlDateFormatter::FULL,
            'timeFormat' => $this->isAllDay ? IntlDateFormatter::NONE : IntlDateFormatter::SHORT,
            'locale' => null,
            'rangeSeparator' => '–',
            'dateTimeSeparator' => ', ',
        ];

        $configuration = array_merge(
            $defaults,
            array_intersect_key($configuration, $defaults),
        );

        return Plugin::$plugin->getFormatService()->dateRange(
            $this->startDate,
            $this->endDate,
            $configuration['dateFormat'],
            $configuration['timeFormat'],
            $configuration['locale'],
            $configuration['rangeSeparator'],
            $configuration['dateTimeSeparator'],
        );
    }
}
