<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Override\Eluceo\iCal\Domain\Entity;

use Eluceo\iCal\Domain\Entity\Event as BaseEvent;

/**
 * Overridden event class
 *
 * @package Gewerk\RecurringDates\Override\Eluceo\iCal\Domain\Entity
 */
class Event extends BaseEvent
{
    /**
     * Saved RRULE
     *
     * @var string|null
     */
    private ?string $rrule = null;

    /**
     * Sets RRULE
     *
     * @param string|null $value
     * @return self
     */
    public function setRrule(?string $value): self
    {
        $this->rrule = $value;

        return $this;
    }

    /**
     * Returns saved RRULE
     *
     * @return string|null
     */
    public function getRrule(): ?string
    {
        return $this->rrule;
    }
}
