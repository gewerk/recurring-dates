<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Behavior;

use craft\base\Element;
use craft\db\Query;
use craft\db\Table;
use craft\helpers\Db;
use DateTime;
use DateTimeZone;
use Gewerk\RecurringDates\Model\Occurrence;
use Gewerk\RecurringDates\Plugin;
use yii\base\Behavior;

/**
 * Extends the element object with some helper functions.
 *
 * @property Element $owner
 * @package Gewerk\RecurringDates\Behavior
 */
class ElementBehavior extends Behavior
{
    /**
     * Returns the next occurrence for a field
     *
     * @param string $fieldHandle
     * @return Occurrence|null
     */
    public function getNextOccurrence(string $fieldHandle): ?Occurrence
    {
        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $occurrence = $this->getBaseQuery($field->id)
                ->andWhere(Db::parseDateParam('startDate', $utcNow, '>='))
                ->orderBy(['startDate' => 'ASC'])
                ->one();

            if ($occurrence) {
                return Occurrence::fromArray($occurrence);
            }
        }

        return null;
    }

    /**
     * Returns the next or the last occurrence for a field
     *
     * @param string $fieldHandle
     * @return Occurrence|null
     */
    public function getNextOrLastOccurrence(string $fieldHandle): ?Occurrence
    {
        if ($occurrence = $this->getNextOccurrence($fieldHandle)) {
            return $occurrence;
        }

        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            $occurrence = $this->getBaseQuery($field->id)
                ->orderBy(['startDate' => 'DESC'])
                ->one();

            if ($occurrence) {
                return Occurrence::fromArray($occurrence);
            }
        }

        return null;
    }

    /**
     * Returns all occurrences for a field
     *
     * @param string $fieldHandle
     * @return Occurrence[]
     */
    public function getOccurrences(string $fieldHandle, bool $onlyFutureOccurrences = true): array
    {
        if ($field = $this->owner->getFieldLayout()->getFieldByHandle($fieldHandle)) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $query = $this->getBaseQuery($field->id)->orderBy(['startDate' => 'ASC']);

            if ($onlyFutureOccurrences) {
                $query->andWhere(Db::parseDateParam('startDate', $utcNow, '>='));
            }

            return array_map(function($occurrence) {
                return Occurrence::fromArray($occurrence);
            }, $query->all());
        }

        return [];
    }

    /**
     * Generates base query
     *
     * @param int $fieldId
     * @return Query
     */
    private function getBaseQuery(int $fieldId): Query
    {
        $query = (new Query())
            ->select([
                '[[occurrences.startDate]] AS startDate',
                '[[occurrences.endDate]] AS endDate',
                '[[occurrences.allDay]] AS allDay',
            ])
            ->from(Plugin::OCCURRENCES_TABLE . ' occurrences')
            ->innerJoin(Table::ELEMENTS, '[[elements.id]] = [[occurrences.dateId]]')
            ->where([
                '[[occurrences.elementId]]' => $this->owner->id,
                '[[occurrences.siteId]]' => $this->owner->siteId,
                '[[occurrences.fieldId]]' => $fieldId,
                '[[elements.dateDeleted]]' => null,
            ]);

        return $query;
    }
}
