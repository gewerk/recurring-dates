<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Console\Controller;

use Craft;
use craft\console\Controller;
use craft\queue\Queue;
use craft\services\Elements;
use craft\services\Fields;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Job\CreateOccurrencesJob;
use yii\console\ExitCode;

/**
 * Command actions related to occurrences
 *
 * @package Gewerk\RecurringDates\Console\Controller
 */
class OccurrencesController extends Controller
{
    /**
     * Updates the occurrences for all elements
     *
     * @return int
     */
    public function actionUpdate()
    {
        /** @var Queue */
        $queue = Craft::$app->getQueue();

        /** @var Elements */
        $elementsService = Craft::$app->getElements();
        $elementTypes = $elementsService->getAllElementTypes();

        /** @var Fields */
        $fieldsService = Craft::$app->getFields();

        foreach ($elementTypes as $elementType) {
            $fields = $fieldsService->getFieldsByElementType($elementType);

            foreach ($fields as $field) {
                if ($field instanceof RecurringDatesField) {
                    $queue->push(new CreateOccurrencesJob([
                        'elementType' => $elementType,
                        'elementId' => '*',
                        'siteId' => '*',
                        'fieldHandle' => $field->handle,
                    ]));
                }
            }
        }

        return ExitCode::OK;
    }
}
