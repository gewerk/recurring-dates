<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Twig\Extension;

use Gewerk\RecurringDates\Plugin;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Twig extension
 *
 * @package Gewerk\RecurringDates\Twig\Extension
 */
class RecurringDatesTwigExtension extends AbstractExtension
{
    /**
     * @inheritdoc
     */
    public function getFunctions()
    {
        $formatService = Plugin::$plugin->getFormatService();

        return [
            new TwigFunction(
                'date_range',
                [$formatService, 'dateRange']
            ),
        ];
    }
}
