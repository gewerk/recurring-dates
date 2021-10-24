<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Event;

use craft\base\ElementInterface;
use Gewerk\RecurringDates\Override\Eluceo\iCal\Component\Event as EventComponent;
use yii\base\Event;

/**
 * ICS element event
 *
 * @package Gewerk\RecurringDates\Event
 */
class IcsEventElementEvent extends Event
{
    /** @var ElementInterface */
    public $element;

    /** @var RecurringDateElement */
    public $date;

    /** @var EventComponent */
    public $eventComponent;
}
