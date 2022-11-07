<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Twig\Variable;

use craft\base\ElementInterface;
use craft\helpers\UrlHelper;
use Gewerk\RecurringDates\Plugin;

/**
 * Adds shortcuts in templates
 *
 * @package Gewerk\RecurringDates\Twig\Variable
 */
class RecurringDatesVariable
{
    /**
     * Generates an URL to ICS calender file
     *
     * @param ElementInterface $element
     * @param string $fieldHandle
     * @return string
     */
    public function icsUrl(ElementInterface $element, string $fieldHandle): string
    {
        return UrlHelper::actionUrl('recurring-dates/ics/make', [
            'elementId' => $element->id,
            'siteId' => $element->siteId,
            'fieldHandle' => $fieldHandle,
        ]);
    }

    /**
     * Generates an ICS feed
     *
     * @param ElementInterface $element
     * @param string $fieldHandle
     * @return string
     */
    public function ics(ElementInterface $element, string $fieldHandle): string
    {
        return Plugin::$plugin->getIcsService()->generate($element, $fieldHandle);
    }
}
