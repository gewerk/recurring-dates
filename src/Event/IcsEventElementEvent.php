<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Event;

use craft\base\ElementInterface;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Override\Eluceo\iCal\Domain\Entity\Event as ICalEvent;
use yii\base\Event;

/**
 * ICS element event
 *
 * @package Gewerk\RecurringDates\Event
 */
class IcsEventElementEvent extends Event
{
    /** @var ElementInterface Owner element */
    public ElementInterface $element;

    /** @var RecurringDateElement Recurring date element */
    public RecurringDateElement $date;

    /** @var ICalEvent iCal event */
    public ICalEvent $icalEvent;
}
