<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Model;

use craft\base\Model;
use DateTime;
use Gewerk\RecurringDates\Element\RecurringDateElement;

/**
 * An occurrence of a running date
 *
 * @package Gewerk\RecurringDates\Model
 */
class OccurrenceModel extends Model
{
    /**
     * @var RecurringDateElement
     */
    public $owner;

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
}
