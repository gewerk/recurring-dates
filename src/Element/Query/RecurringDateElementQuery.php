<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Element\Query;

use Craft;
use craft\base\ElementInterface;
use craft\db\Query;
use craft\db\QueryAbortedException;
use craft\db\Table;
use craft\elements\db\ElementQuery;
use craft\helpers\ArrayHelper;
use craft\helpers\Db;
use DateTime;
use DateTimeZone;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Model\Occurrence;
use Gewerk\RecurringDates\Plugin;
use Gewerk\RecurringDates\Query\OccurrenceQuery;
use yii\base\InvalidConfigException;

/**
 * @method RecurringDateElement[] all($db = null)
 * @method RecurringDateElement|null one($db = null)
 * @method RecurringDateElement|null nth(int $n, Connection $db = null)
 * @package Gewerk\RecurringDates\Element\Query
 */
class RecurringDateElementQuery extends ElementQuery
{
    /**
     * @inheritdoc
     * @var array<string, int>
     */
    protected array $defaultOrderBy = ['recurring_dates.sortOrder' => SORT_ASC];

    /**
     * @var int|array<int|string>|null
     */
    public array|int|string|false|null $fieldId = null;

    /**
     * @var int|array<int|string>|null
     */
    public int|array|string|false|null $ownerId = null;

    /**
     * @var bool|null
     */
    public ?bool $allowOwnerDrafts = null;

    /**
     * @var bool|null
     */
    public ?bool $allowOwnerRevisions = null;

    /**
     * @var Occurrence|null
     */
    private ?Occurrence $nextOccurrence = null;

    /**
     * Sets the next occurrence
     *
     * @param Occurrence|null $nextOccurrence
     * @return void
     */
    public function setNextOccurrence(?Occurrence $nextOccurrence): void
    {
        $this->nextOccurrence = $nextOccurrence;
    }

    /**
     * Returns the next (or last if was in the past) occurrence
     *
     * @param bool $onlyUpcomingOccurrence Get next occurrence only if it's upcoming
     * @return Occurrence|null
     */
    public function getNextOccurrence(bool $onlyUpcomingOccurrence = false): ?Occurrence
    {
        if ($onlyUpcomingOccurrence && $this->nextOccurrence?->isPast) {
            return null;
        }

        return $this->nextOccurrence;
    }

    /**
     * Returns all occurrences
     *
     * @param bool $onlyFutureOccurrences
     * @param bool $includeFirstOccurrence
     * @return array<Occurrence>
     */
    public function getOccurrences(bool $onlyFutureOccurrences = true, bool $includeFirstOccurrence = true): array
    {
        return $this->occurrences($onlyFutureOccurrences, $includeFirstOccurrence);
    }

    /**
     * Returns an occurrences query
     *
     * @param bool $onlyFutureOccurrences
     * @param bool $includeFirstOccurrence
     * @return array<Occurrence>
     */
    public function occurrences(bool $onlyFutureOccurrences = true, bool $includeFirstOccurrence = true): array
    {
        // Prepare query
        $this->normalizeSiteId();
        $this->normalizeFieldId();
        $this->normalizeOwnerId();

        // Get occurrences
        $query = (new OccurrenceQuery())
            ->select(['startDate', 'endDate', 'allDay'])
            ->from(Plugin::OCCURRENCES_TABLE)
            ->where(['deleted' => false])
            ->orderBy(['startDate' => 'ASC']);

        if ($this->fieldId) {
            $query->andWhere(['fieldId' => $this->fieldId]);
        }

        if ($this->ownerId) {
            $query->andWhere(['elementId' => $this->ownerId]);
        }

        if ($this->siteId) {
            $query->andWhere(['siteId' => $this->siteId]);
        }

        if ($onlyFutureOccurrences) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $query->andWhere(
                Db::parseDateParam('startDate', $utcNow, '>=')
            );
        }

        if (!$includeFirstOccurrence) {
            $query->andWhere(['first' => false]);
        }

        // Order by startDate
        $query->orderBy(['startDate' => 'ASC']);

        return $query->all();
    }

    /**
     * @param string|array<string>|RecurringDatesField|null $value
     * @return static
     */
    public function field(string|RecurringDatesField|array|null $value): static
    {
        if ($value instanceof RecurringDatesField) {
            $this->fieldId = [(int) $value->id];
        } elseif ($value !== null) {
            $this->fieldId = (new Query())
                ->select(['id'])
                ->from([Table::FIELDS])
                ->where(Db::parseParam('handle', $value))
                ->andWhere(['type' => RecurringDatesField::class])
                ->column();
        } else {
            $this->fieldId = null;
        }

        return $this;
    }

    /**
     * @param int|string|array<int|string>|null $value
     * @return static
     */
    public function fieldId($value): static
    {
        $this->fieldId = $value;
        return $this;
    }

    /**
     * @param int|string|array<int|string>|null $value
     * @return static
     */
    public function ownerId($value): static
    {
        $this->ownerId = $value;
        return $this;
    }

    /**
     * @param ElementInterface $owner
     * @return static
     */
    public function owner(ElementInterface $owner): static
    {
        $this->ownerId = $owner->id;
        $this->siteId = $owner->siteId;
        return $this;
    }

    /**
     * @param bool|null $value The property value
     * @return static self reference
     * @uses $allowOwnerDrafts
     */
    public function allowOwnerDrafts($value = true): static
    {
        $this->allowOwnerDrafts = $value;
        return $this;
    }

    /**
     * @param bool|null $value The property value
     * @return static self reference
     * @uses $allowOwnerDrafts
     */
    public function allowOwnerRevisions($value = true): static
    {
        $this->allowOwnerRevisions = $value;
        return $this;
    }

    /**
     * @inheritdoc
     */
    protected function beforePrepare(): bool
    {
        // Prepare query
        $this->normalizeFieldId();
        $this->normalizeOwnerId();
        $this->joinElementTable('recurring_dates');

        // Add selects
        $this->query?->select([
            'recurring_dates.fieldId',
            'recurring_dates.startDate',
            'recurring_dates.endDate',
            'recurring_dates.allDay',
            'recurring_dates.rrule',
            'recurring_dates.count',
            'recurring_dates.untilDate',
            'recurring_dates.ownerId',
            'recurring_dates.sortOrder',
        ]);

        // Filter by field ID
        if ($this->fieldId) {
            $this->subQuery?->andWhere(Db::parseNumericParam('[[recurring_dates.fieldId]]', $this->fieldId));
        }

        // Filter by owner ID
        if ($this->ownerId) {
            $this->subQuery?->andWhere(Db::parseNumericParam('[[recurring_dates.ownerId]]', $this->ownerId));
        }

        // Ignore revision/draft dates by default
        $allowOwnerDrafts = $this->allowOwnerDrafts ?? ($this->id || $this->ownerId);
        $allowOwnerRevisions = $this->allowOwnerRevisions ?? ($this->id || $this->ownerId);

        if (!$allowOwnerDrafts || !$allowOwnerRevisions) {
            $this->subQuery?->innerJoin(['owners' => Table::ELEMENTS], '[[owners.id]] = [[recurring_dates.ownerId]]');

            if (!$allowOwnerDrafts) {
                $this->subQuery?->andWhere(['owners.draftId' => null]);
            }

            if (!$allowOwnerRevisions) {
                $this->subQuery?->andWhere(['owners.revisionId' => null]);
            }
        }

        return parent::beforePrepare();
    }

    /**
     * Normalizes the fieldId param to an array of IDs or null
     *
     * @return void
     */
    private function normalizeFieldId(): void
    {
        if ($this->fieldId === null && $this->id) {
            $this->fieldId = (new Query())
                ->select(['fieldId'])
                ->distinct()
                ->from([Plugin::DATES_TABLE])
                ->where(Db::parseParam('id', $this->id))
                ->column() ?: false;
        }

        if ($this->fieldId === false) {
            throw new QueryAbortedException();
        }

        if (empty($this->fieldId)) {
            $this->fieldId = null;
        } elseif (is_numeric($this->fieldId)) {
            $this->fieldId = [(int) $this->fieldId];
        } elseif (!is_array($this->fieldId) || !ArrayHelper::isNumeric($this->fieldId)) {
            $this->fieldId = (new Query())
                ->select(['id'])
                ->from([Table::FIELDS])
                ->where(Db::parseParam('id', $this->fieldId))
                ->andWhere(['type' => RecurringDatesField::class])
                ->column();
        }
    }

    /**
     * Normalizes the ownerId param to an array of IDs or null
     *
     * @return void
     */
    private function normalizeOwnerId(): void
    {
        if (empty($this->ownerId)) {
            $this->ownerId = null;
        } elseif (is_numeric($this->ownerId)) {
            $this->ownerId = [$this->ownerId];
        } elseif (is_array($this->ownerId) && !ArrayHelper::isNumeric($this->ownerId)) {
            throw new InvalidConfigException('Invalid ownerId param value');
        }
    }

    /**
     * Normalizes the siteId param value
     *
     * @return void
     */
    private function normalizeSiteId(): void
    {
        if (empty($this->siteId)) {
            $this->siteId = Craft::$app->getSites()->getCurrentSite()->id;
        } elseif ($this->siteId === '*') {
            $this->siteId = Craft::$app->getSites()->getAllSiteIds();
        }
    }
}
