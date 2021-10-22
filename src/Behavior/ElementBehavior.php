<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Behavior;

use craft\base\Element;
use Gewerk\RecurringDates\Model\OccurrenceModel;
use Gewerk\RecurringDates\Plugin;
use Gewerk\RecurringDates\Service\OccurrenceService;
use yii\base\Behavior;

/**
 * Extends the element object with some helper functions.
 *
 * @property Element $owner
 * @package Gewerk\RecurringDates\Behavior
 */
class ElementBehavior extends Behavior
{
    /** @var OccurrenceService */
    private $_occurrenceService;

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        $this->_occurrenceService = Plugin::$plugin->getOccurrenceService();
    }

    /**
     * Returns the next occurrence for a field
     *
     * @param string $fieldHandle
     * @return OccurrenceModel|null
     */
    public function getNextOccurrence(string $fieldHandle)
    {
        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            return $this->_occurrenceService->getNextOccurrence($this->owner, $field);
        }

        return null;
    }

    /**
     * Returns the next or the last occurrence for a field
     *
     * @param string $fieldHandle
     * @return OccurrenceModel|null
     */
    public function getNextOrLastOccurrence(string $fieldHandle)
    {
        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            return $this->_occurrenceService->getNextOrLastOccurrence($this->owner, $field);
        }

        return null;
    }

    /**
     * Returns all occurrences for a field
     *
     * @param string $fieldHandle
     * @return OccurrenceModel[]
     */
    public function getOccurrences(string $fieldHandle, bool $onlyFutureOccurrences = true)
    {
        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            return $this->_occurrenceService->getOccurrences($this->owner, $field, $onlyFutureOccurrences);
        }

        return [];
    }
}
