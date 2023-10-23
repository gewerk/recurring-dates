<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Console\Controller;

use craft\console\Controller;
use craft\helpers\Console;
use craft\helpers\Db;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Plugin;
use yii\console\ExitCode;

/**
 * Command actions related to occurrences
 *
 * @package Gewerk\RecurringDates\Console\Controller
 */
class OccurrencesController extends Controller
{
    /**
     * Regenerates all occurrences
     *
     * @return int
     */
    public function actionRegenerate()
    {
        // Drop all occurrences
        Db::delete(Plugin::OCCURRENCES_TABLE);

        // Base query
        $query = RecurringDateElement::find()
            ->siteId('*')
            ->trashed(null)
            ->status(null);

        // Total elements
        $total = (int) $query->count();
        $pages = (int) ceil($total / 100);

        // Setup progress bar
        Console::startProgress(0, $total);

        // Start creation
        $done = 0;
        for ($i = 0; $i < $pages; $i++) {
            $elements = $query
                ->limit(100)
                ->offset($i * 100)
                ->all();

            foreach ($elements as $element) {
                // Save first occurrence
                Db::insert(Plugin::OCCURRENCES_TABLE, [
                    'dateId' => $element->id,
                    'elementId' => $element->getOwner()->id,
                    'siteId' => $element->getOwner()->siteId,
                    'fieldId' => $element->fieldId,
                    'first' => (int) true,
                    'startDate' => Db::prepareDateForDb($element->startDate),
                    'endDate' => Db::prepareDateForDb($element->endDate),
                    'allDay' => (int) $element->allDay,
                ]);

                // Save additional occurrences
                if ($element->rrule) {
                    Plugin::$plugin->getInstance()->getFieldService()->saveOccurrences($element);
                }

                $done += 1;
                Console::updateProgress($done, $total);
            }
        }

        // Finish bar
        Console::endProgress();

        return ExitCode::OK;
    }
}
