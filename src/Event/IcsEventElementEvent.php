<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Event;

use craft\base\ElementInterface;
use Spatie\IcalendarGenerator\Components\Event as EventElement;
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

    /** @var EventElement */
    public $eventElement;
}
