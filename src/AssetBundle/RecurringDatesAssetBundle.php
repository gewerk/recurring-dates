<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\AssetBundle;

use Craft;
use craft\helpers\Json;
use craft\i18n\Locale;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use craft\web\assets\vue\VueAsset;
use craft\web\View;
use yii\web\AssetBundle as YiiAssetBundle;

/**
 * Asset bundle for loading our Vue components and stylesheets
 *
 * @package Gewerk\RecurringDates\AssetBundle
 */
class RecurringDatesAssetBundle extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@recurring-dates/resources/assets/dist';

    /**
     * @var array<class-string<YiiAssetBundle>>
     */
    public $depends = [
        CpAsset::class,
        VueAsset::class,
    ];

    /**
     * @var array<string>
     */
    public $js = [
        'recurring-dates.js',
    ];

    /**
     * @var array<string>
     */
    public $css = [
        'css/recurring-dates.css',
    ];

    /**
     * @inheritdoc
     */
    public function registerAssetFiles($view): void
    {
        /** @var View $view */
        parent::registerAssetFiles($view);

        // Plugin translations
        $view->registerTranslations('recurring-dates', [
            'Repeat daily',
            'every',
            'Repeat interval',
            'day(s)',
            'Check for {onLabel}.',
            'Repeat monthly',
            'month(s)',
            'Repeat monthly on the same day',
            'on the same day',
            'Repeat monthly on',
            'on days',
            'Repeat monthly on the',
            'on the',
            'Date',
            'Delete date',
            'Start & End',
            'Start',
            'End',
            'All Day',
            'Repeat date',
            'Repeat',
            'Yearly',
            'Monthly',
            'Weekly',
            'Daily',
            'Never',
            'After',
            'On Date',
            'Number of Executions',
            'executions',
            'End on Date',
            'Exceptions',
            'Exception on Date',
            'Delete exception',
            'Add exception',
            'Add date',
            'Repeat weekly',
            'weeks(s)',
            'Repeat yearly',
            'years(s)',
            'Repeat yearly on',
            'on',
            'Repeat yearly on the',
            'of',
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
            'Last',
        ]);

        /** @var Locale */
        $locale = Craft::$app->getFormattingLocale();

        // Weekdays
        $weekdays = Json::encode([
            'MO' => $locale->getWeekDayName(1, Locale::LENGTH_SHORT, true),
            'TU' => $locale->getWeekDayName(2, Locale::LENGTH_SHORT, true),
            'WE' => $locale->getWeekDayName(3, Locale::LENGTH_SHORT, true),
            'TH' => $locale->getWeekDayName(4, Locale::LENGTH_SHORT, true),
            'FR' => $locale->getWeekDayName(5, Locale::LENGTH_SHORT, true),
            'SA' => $locale->getWeekDayName(6, Locale::LENGTH_SHORT, true),
            'SU' => $locale->getWeekDayName(0, Locale::LENGTH_SHORT, true),
        ]);

        // Months
        $months = Json::encode($locale->getMonthNames(Locale::LENGTH_FULL, true));

        // Register locales
        $view->registerJs(<<<JS
            if (typeof Craft.RecurringDatesLocales === 'undefined') {
                Craft.RecurringDatesLocales = {};
            }
            Craft.RecurringDatesLocales.Weekdays = {$weekdays};
            Craft.RecurringDatesLocales.Months = {$months};
        JS, View::POS_BEGIN);
    }
}
