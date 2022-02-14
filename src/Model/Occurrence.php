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

/**
 * An occurrence of a date
 *
 * @package Gewerk\RecurringDates\Model
 */
class Occurrence extends Model
{
    /**
     * @var DateTime
     */
    public $startDate;

    /**
     * @var DateTime
     */
    public $endDate;

    /**
     * @var bool
     */
    public $allDay = false;

    /**
     * Creates an instance from an array
     *
     * @param array $occurrence
     * @return Occurrence
     */
    public static function fromArray(array $occurrence): self
    {
        return new static([
            'startDate' => DateTimeHelper::toDateTime($occurrence['startDate']),
            'endDate' => DateTimeHelper::toDateTime($occurrence['endDate']),
            'allDay' => (bool) $occurrence['allDay'],
        ]);
    }
}
