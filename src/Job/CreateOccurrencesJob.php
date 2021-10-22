<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Job;

use Craft;
use craft\elements\db\ElementQuery;
use craft\errors\InvalidFieldException;
use craft\queue\BaseJob;
use Gewerk\RecurringDates\Plugin;

/**
 * This job creates all occurrences for a recurring date.
 *
 * @package Gewerk\RecurringDates\Job
 */
class CreateOccurrencesJob extends BaseJob
{
    /**
     * @var string|null
     */
    public $elementType;

    /**
     * @var int|int[]|null
     */
    public $elementId;

    /**
     * @var int|string|null
     */
    public $siteId = '*';

    /**
     * @var string
     */
    public $fieldHandle;

    /**
     * @var bool
     */
    public $onlyFutureOccurrences = true;

    /**
     * @inheritdoc
     */
    protected function defaultDescription(): string
    {
        return Craft::t('recurring-dates', 'Updating occurrences for element #{elementId}', [
            'elementId' => $this->elementId,
        ]);
    }

    /**
     * @inheritdoc
     */
    public function execute($queue)
    {
        /** @var ElementQuery $query */
        $query = $this->elementType::find();
        $elements = $query
            ->drafts(null)
            ->provisionalDrafts(null)
            ->id($this->elementId)
            ->siteId($this->siteId)
            ->anyStatus()
            ->all();

        $total = count($elements);
        $occurrenceService = Plugin::$plugin->getOccurrenceService();

        foreach ($elements as $i => $element) {
            $this->setProgress($queue, ($i + 1) / $total);

            try {
                $occurrenceService->createOccurrences($element, $this->fieldHandle, $this->onlyFutureOccurrences);
            } catch (InvalidFieldException $e) {
                // Field doesn't exists
            }
        }
    }
}
