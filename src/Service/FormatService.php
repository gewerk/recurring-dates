<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Service;

use Craft;
use craft\base\Component;
use craft\helpers\DateTimeHelper;
use DateTime;
use IntlDateFormatter;
use OpenPsa\Ranger\Ranger;

/**
 * Formatting service
 *
 * @package Gewerk\RecurringDates\Service
 */
class FormatService extends Component
{
    /** @var Ranger[] */
    private $ranger = [];

    /** @var int[] */
    private $formats = [
        'none' => IntlDateFormatter::NONE,
        'full' => IntlDateFormatter::FULL,
        'long' => IntlDateFormatter::LONG,
        'medium' => IntlDateFormatter::MEDIUM,
        'short' => IntlDateFormatter::SHORT,
    ];

    /**
     * Formats a date range
     *
     * @param string|DateTime $startDate
     * @param string|DateTime $endDate
     * @param string|int $dateFormat
     * @param string|int $timeFormat
     * @param string|null $locale
     * @param string|null $rangeSeparator
     * @param string|null $dateTimeSeparator
     * @return string
     */
    public function dateRange(
        $startDate,
        $endDate,
        $dateFormat = IntlDateFormatter::FULL,
        $timeFormat = IntlDateFormatter::SHORT,
        string $locale = null,
        string $rangeSeparator = '–',
        string $dateTimeSeparator = ', '
    ) {
        // Get current locale
        $locale = $locale ?: Craft::$app->getLocale()->getLanguageID();

        // Parse start and end dates
        $startDate = DateTimeHelper::toDateTime($startDate);
        $endDate = DateTimeHelper::toDateTime($endDate);

        // Aliases
        if (is_string($dateFormat) && !is_numeric($dateFormat)) {
            $dateFormat = $this->formats[$dateFormat] ?: IntlDateFormatter::FULL;
        }

        if (is_string($timeFormat) && !is_numeric($timeFormat)) {
            $timeFormat = $this->formats[$timeFormat] ?: IntlDateFormatter::SHORT;
        }

        // Format
        return $this->getRanger($locale)
            ->setRangeSeparator($rangeSeparator)
            ->setDateTimeSeparator($dateTimeSeparator)
            ->setDateType((int) $dateFormat)
            ->setTimeType((int) $timeFormat)
            ->format($startDate, $endDate);
    }

    /**
     * @param string $locale
     * @return Ranger
     */
    private function getRanger(string $locale): Ranger
    {
        if (!isset($this->ranger[$locale])) {
            $this->ranger[$locale] = new Ranger($locale);
        }

        return $this->ranger[$locale];
    }
}
