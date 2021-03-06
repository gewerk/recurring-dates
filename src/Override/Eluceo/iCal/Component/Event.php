<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Override\Eluceo\iCal\Component;

use Eluceo\iCal\Component\Event as BaseClass;
use Eluceo\iCal\Property;
use Eluceo\iCal\Property\ValueInterface;

/**
 * Overrides the Event class from eluceo/ical
 *
 * @package Gewerk\RecurringDates\Override\Eluceo\iCal\Component
 */
class Event extends BaseClass
{
    /** @var Property[] */
    private $properties = [];

    /** @var ValueInterface[] */
    private $values = [];

    /**
     * Adds a property
     *
     * @param string $name
     * @param Property $property
     */
    public function addProperty(Property $property)
    {
        $this->properties[] = $property;
    }

    /**
     * Adds a value
     *
     * @param string $name
     * @param ValueInterface $value
     */
    public function addValue(string $name, ValueInterface $value)
    {
        $this->values[$name] = $value;
    }

    /**
     * @inheritdoc
     */
    public function buildPropertyBag()
    {
        $propertyBag = parent::buildPropertyBag();

        foreach ($this->properties as $property) {
            $propertyBag->add($property);
        }

        foreach ($this->values as $name => $value) {
            $propertyBag->set($name, $value);
        }

        return $propertyBag;
    }
}
