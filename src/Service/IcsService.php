<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Service;

use craft\base\Component;
use craft\base\ElementInterface;
use Eluceo\iCal\Domain\Entity\Calendar;
use Eluceo\iCal\Domain\Entity\Event;
use Eluceo\iCal\Domain\ValueObject\Date;
use Eluceo\iCal\Domain\ValueObject\DateTime;
use Eluceo\iCal\Domain\ValueObject\MultiDay;
use Eluceo\iCal\Domain\ValueObject\SingleDay;
use Eluceo\iCal\Domain\ValueObject\TimeSpan;
use Eluceo\iCal\Domain\ValueObject\UniqueIdentifier;
use Eluceo\iCal\Presentation\Component\Property;
use Eluceo\iCal\Presentation\Component\Property\Value\TextValue;
use Eluceo\iCal\Presentation\Factory\CalendarFactory;
use Eluceo\iCal\Presentation\Factory\EventFactory;
use Generator;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Event\IcsEventElementEvent as IcsEventElementEvent;
use Gewerk\RecurringDates\Override\Eluceo\iCal\Domain\Entity\Event as ICalEvent;

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
        /** @var RecurringDateElement[] $dates */
        $dates = $element->getFieldValue($fieldHandle)->all();
        $icalEvents = [];

        foreach ($dates as $date) {
            $icalEvent = new ICalEvent(new UniqueIdentifier((string) $date->uid));
            $icalEvent->setSummary($element->title);

            // Set date
            if (!$date->allDay) {
                $icalEvent->setOccurrence(new TimeSpan(
                    new DateTime($date->startDate, false),
                    new DateTime($date->endDate ?? $date->startDate, false),
                ));
            } elseif ($date->endDate) {
                $icalEvent->setOccurrence(new MultiDay(
                    new Date($date->startDate),
                    new Date($date->endDate),
                ));
            } else {
                $icalEvent->setOccurrence(new SingleDay(
                    new Date($date->startDate),
                ));
            }

            if ($date->rrule) {
                $icalEvent->setRrule($date->rrule);
            }

            $event = new IcsEventElementEvent([
                'element' => $element,
                'date' => $date,
                'icalEvent' => $icalEvent,
            ]);

            $this->trigger(self::EVENT_AFTER_ICS_ELEMENT_CREATE, $event);
            $icalEvents[] = $event->icalEvent;
        }

        // Build calender
        $calendar = new Calendar($icalEvents);
        $calendar->setProductIdentifier('-//gewerk/recurring-dates//EN');

        // Build calender factory
        $calendarFactory = new CalendarFactory(new class() extends EventFactory {
            protected function getProperties(Event $event): Generator
            {
                yield from parent::getProperties($event);

                if ($event instanceof ICalEvent && $rrule = $event->getRrule()) {
                    yield new Property(
                        'RRULE',
                        new TextValue($rrule)
                    );
                }
            }
        });

        return $calendarFactory->createCalendar($calendar);
    }
}
