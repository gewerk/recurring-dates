<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Service;

use craft\base\Component;
use craft\base\ElementInterface;
use Eluceo\iCal\Component\Calendar;
use Eluceo\iCal\Property\RawStringValue;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Event\IcsEventElementEvent as IcsEventElementEvent;
use Gewerk\RecurringDates\Override\Eluceo\iCal\Component\Event;

/**
 * iCalendar related services
 *
 * @package Gewerk\RecurringDates\Service
 */
class IcsService extends Component
{
    /**
     * @event IcsElementEvent The event is triggered after an ICS event element was created.
     */
    public const EVENT_AFTER_ICS_ELEMENT_CREATE = 'afterIcsElementCreate';

    /**
     * Generates an ICS feed
     *
     * @param ElementInterface $element
     * @param string $fieldHandle
     * @return string
     */
    public function generate(ElementInterface $element, string $fieldHandle): string
    {
        // Create calendar
        $calendar = new Calendar('-//gewerk/recurring-dates//EN');

        /** @var RecurringDateElement[] */
        $dates = $element->getFieldValue($fieldHandle)->all();
        foreach ($dates as $date) {
            $eventComponent = new Event($date->uid);
            $eventComponent->setSummary($element->title);
            $eventComponent->setDtStart($date->startDate);
            $eventComponent->setDtEnd($date->endDate);

            if ($date->allDay) {
                $eventComponent->setNoTime(true);
            }

            if ($date->rrule) {
                $eventComponent->addValue('RRULE', new RawStringValue($date->rrule));
            }

            $event = new IcsEventElementEvent([
                'element' => $element,
                'date' => $date,
                'eventComponent' => $eventComponent,
            ]);

            $this->trigger(self::EVENT_AFTER_ICS_ELEMENT_CREATE, $event);
            $calendar->addComponent($event->eventComponent);
        }

        return $calendar->render();
    }
}
