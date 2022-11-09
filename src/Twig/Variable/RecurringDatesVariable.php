<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Twig\Variable;

use Craft;
use craft\base\ElementInterface;
use craft\helpers\UrlHelper;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Plugin;

/**
 * Adds shortcuts in templates
 *
 * @package Gewerk\RecurringDates\Twig\Variable
 */
class RecurringDatesVariable
{
    /**
     * Returns a new recurring date query
     *
     * @param array<string, mixed> $criteria
     * @return RecurringDateElementQuery
     */
    public function query(array $criteria = []): RecurringDateElementQuery
    {
        $query = RecurringDateElement::find();

        Craft::configure($query, $criteria);

        return $query;
    }

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

    /**
     * Calls dateRange helper from format service
     *
     * @param mixed[] $args
     * @return string
     */
    public function formatRange(...$args): string
    {
        return call_user_func_array(
            [Plugin::$plugin->getFormatService(), 'dateRange'],
            $args,
        );
    }
}
