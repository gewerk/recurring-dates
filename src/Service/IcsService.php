<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Service;

use craft\base\Component;
use craft\base\ElementInterface;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Event\IcsEventElementEvent as IcsEventElementEvent;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;
use Spatie\IcalendarGenerator\Properties\TextProperty;

class IcsService extends Component
{
    /**
     * @event IcsElementEvent The event is triggered after an ICS event element was created.
     */
    const EVENT_AFTER_ICS_ELEMENT_CREATE = 'afterIcsElementCreate';

    public function generate(ElementInterface $element, string $fieldHandle): string
    {
        // Create calendar
        $calendar = Calendar::create();

        /** @var RecurringDateElement[] */
        $dates = $element->getFieldValue($fieldHandle)->all();
        foreach ($dates as $date) {
            $eventElement = Event::create($element->title)
                ->uniqueIdentifier($date->uid)
                ->startsAt($date->startDate)
                ->endsAt($date->endDate);

            if ($date->allDay) {
                $eventElement->fullDay();
            }

            if ($date->rrule) {
                $rrule = (new TextProperty('RRULE', $date->rrule))
                    ->withoutEscaping();

                $eventElement->appendProperty($rrule);
            }

            $event = new IcsEventElementEvent([
                'element' => $element,
                'date' => $date,
                'eventElement' => $eventElement,
            ]);

            $this->trigger(self::EVENT_AFTER_ICS_ELEMENT_CREATE, $event);
            $calendar->event($event->eventElement);
        }

        return $calendar->get();
    }
}
