<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Model;

use Eluceo\iCal\Domain\Entity\Event;

/**
 * Extends Event entity from eluceo\ical
 *
 * @package Gewerk\RecurringDates\Model
 */
class IcsEvent extends Event
{
    private ?string $rrule = null;

    /**
     * Sets the RRULE property
     *
     * @param string|null $rrule
     * @return void
     */
    public function setRrule(?string $rrule): void
    {
        $this->rrule = $rrule;
    }

    /**
     * Gets the RRULE property
     *
     * @return string|null
     */
    public function getRrule(): ?string
    {
        return $this->rrule;
    }
}
