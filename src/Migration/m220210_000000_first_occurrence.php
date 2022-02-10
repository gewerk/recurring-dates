<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2022 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Migration;

use Craft;
use craft\db\Migration;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Job\CreateOccurrencesJob;
use Gewerk\RecurringDates\Plugin;

/**
 * Add new flag for first occurrence
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m220210_000000_first_occurrence extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'first')) {
            $this->addColumn(
                Plugin::OCCURRENCES_TABLE,
                'first',
                $this->boolean()->defaultValue(false)->after('allDay')
            );

            $this->refreshAllRecurringDates();
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }

    /**
     * Refreshes all recurring dates
     *
     * @return void
     */
    private function refreshAllRecurringDates()
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
                        'includeFirstOccurrence' => true,
                    ]));
                }
            }
        }
    }
}
