<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Job;

use Craft;
use craft\queue\BaseJob;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Plugin;

/**
 * This job creates all occurrences for a recurring date.
 *
 * @package Gewerk\RecurringDates\Job
 */
class CreateOccurrencesJob extends BaseJob
{
    /**
     * @var int|int[]|null
     */
    public $elementId;

    /**
     * @var int|string|null
     */
    public $siteId = '*';

    /**
     * @inheritdoc
     */
    protected function defaultDescription(): string
    {
        return Craft::t('recurring-dates', 'Updating occurrences');
    }

    /**
     * @inheritdoc
     */
    public function execute($queue)
    {
        $fieldService = Plugin::$plugin->getFieldService();

        $elements = RecurringDateElement::find()
            ->id($this->elementId)
            ->siteId($this->siteId)
            ->trashed(null)
            ->anyStatus()
            ->all();

        foreach ($elements as $i => $element) {
            $this->setProgress($queue, ($i + 1) / count($elements));
            $fieldService->saveOccurrences($element);
        }
    }
}
