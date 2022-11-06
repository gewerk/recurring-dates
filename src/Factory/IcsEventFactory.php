<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Factory;

use Eluceo\iCal\Domain\Entity\Event;
use Eluceo\iCal\Presentation\Component;
use Eluceo\iCal\Presentation\Component\Property;
use Eluceo\iCal\Presentation\Component\Property\Value\TextValue;
use Eluceo\iCal\Presentation\Factory\EventFactory;
use Gewerk\RecurringDates\Model\IcsEvent;

/**
 * Factory for ICS events
 *
 * @package Gewerk\RecurringDates\Factory
 */
class IcsEventFactory extends EventFactory
{
    /**
     * @inheritdoc
     */
    public function createComponent(Event $event): Component
    {
        $component = parent::createComponent($event);

        if ($event instanceof IcsEvent && ($rrule = $event->getRrule())) {
            $component = $component->withProperty(
                new Property(
                    'RRULE',
                    new TextValue($rrule),
                ),
            );
        }

        return $component;
    }
}
