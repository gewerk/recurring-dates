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
     */
    protected $defaultOrderBy = ['recurring_dates.sortOrder' => SORT_ASC];

    /**
     * @var int|int[]|string|false|null The field ID(s) that the resulting dates must belong to.
     * @used-by fieldId()
     */
    public $fieldId;

    /**
     * @var int|int[]|null The owner element ID(s) that the resulting dates must belong to.
     * @used-by owner()
     * @used-by ownerId()
     */
    public $ownerId;

    /**
     * @var bool|null Whether the owner elements can be drafts.
     * @used-by allowOwnerDrafts()
     */
    public $allowOwnerDrafts;

    /**
     * @var bool|null Whether the owner elements can be revisions.
     * @used-by allowOwnerRevisions()
     */
    public $allowOwnerRevisions;

    /**
     * @inheritdoc
     */
    public $contentTable = null;

    /**
     * Returns all occurrences
     *
     * @param bool $onlyFutureOccurrences
     * @param bool $includeFirstOccurrence
     * @return Occurrence
     */
    public function getOccurrences(bool $onlyFutureOccurrences = true, bool $includeFirstOccurrence = true): array
    {
        // Get occurrences
        $query = (new Query())
            ->select(['startDate', 'endDate', 'allDay'])
            ->from(Plugin::OCCURRENCES_TABLE)
            ->where([
                'fieldId' => $this->fieldId,
                'elementId' => $this->ownerId,
                'siteId' => $this->siteId,
            ])
            ->orderBy(['startDate' => 'ASC']);

        if ($onlyFutureOccurrences) {
            $utcNow = (new DateTime())->setTimezone(new DateTimeZone('utc'));
            $query->andWhere(
                Db::parseDateParam('startDate', $utcNow, '>=')
            );
        }

        if (!$includeFirstOccurrence) {
            $query->andWhere(['first' => false]);
        }

        return array_map(function ($occurrence) {
            return Occurrence::fromArray($occurrence);
        }, $query->all());
    }

    /**
     * Narrows the query results based on the field the dates belong to.
     *
     * Possible values include:
     *
     * | Value | Fetches {elements}…
     * | - | -
     * | `'foo'` | in a field with a handle of `foo`.
     * | `'not foo'` | not in a field with a handle of `foo`.
     * | `['foo', 'bar']` | in a field with a handle of `foo` or `bar`.
     * | `['not', 'foo', 'bar']` | not in a field with a handle of `foo` or `bar`.
     * | a [[RecurringDateElement]] object | in a field represented by the object.
     *
     * ---
     *
     * ```twig
     * {# Fetch {elements} in the Foo field #}
     * {% set {elements-var} = {twig-method}
     *     .field('foo')
     *     .all() %}
     * ```
     *
     * ```php
     * // Fetch {elements} in the Foo field
     * ${elements-var} = {php-method}
     *     ->field('foo')
     *     ->all();
     * ```
     *
     * @param string|string[]|RecurringDatesField|null $value The property value
     * @return static self reference
     * @uses $fieldId
     */
    public function field($value)
    {
        if ($value instanceof RecurringDatesField) {
            $this->fieldId = [$value->id];
        } elseif (is_string($value) || (is_array($value) && count($value) === 1)) {
            if (!is_string($value)) {
                $value = reset($value);
            }

            $field = Craft::$app->getFields()->getFieldByHandle($value);

            if ($field && $field instanceof RecurringDatesField) {
                $this->fieldId = [$field->id];
            } else {
                $this->fieldId = false;
            }
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
     * Narrows the query results based on the field the dates belong to, per the fields’ IDs.
     *
     * Possible values include:
     *
     * | Value | Fetches {elements}…
     * | - | -
     * | `1` | in a field with an ID of 1.
     * | `'not 1'` | not in a field with an ID of 1.
     * | `[1, 2]` | in a field with an ID of 1 or 2.
     * | `['not', 1, 2]` | not in a field with an ID of 1 or 2.
     *
     * ---
     *
     * ```twig
     * {# Fetch {elements} in the field with an ID of 1 #}
     * {% set {elements-var} = {twig-method}
     *     .fieldId(1)
     *     .all() %}
     * ```
     *
     * ```php
     * // Fetch {elements} in the field with an ID of 1
     * ${elements-var} = {php-method}
     *     ->fieldId(1)
     *     ->all();
     * ```
     *
     * @param int|int[]|null $value The property value
     * @return static self reference
     * @uses $fieldId
     */
    public function fieldId($value)
    {
        $this->fieldId = $value;
        return $this;
    }

    /**
     * Narrows the query results based on the owner element of the dates, per the owners’ IDs.
     *
     * Possible values include:
     *
     * | Value | Fetches {elements}…
     * | - | -
     * | `1` | created for an element with an ID of 1.
     * | `'not 1'` | not created for an element with an ID of 1.
     * | `[1, 2]` | created for an element with an ID of 1 or 2.
     * | `['not', 1, 2]` | not created for an element with an ID of 1 or 2.
     *
     * ---
     *
     * ```twig
     * {# Fetch {elements} created for an element with an ID of 1 #}
     * {% set {elements-var} = {twig-method}
     *     .ownerId(1)
     *     .all() %}
     * ```
     *
     * ```php
     * // Fetch {elements} created for an element with an ID of 1
     * ${elements-var} = {php-method}
     *     ->ownerId(1)
     *     ->all();
     * ```
     *
     * @param int|int[]|null $value The property value
     * @return static self reference
     * @uses $ownerId
     */
    public function ownerId($value)
    {
        $this->ownerId = $value;
        return $this;
    }

    /**
     * Sets the [[ownerId()]] and [[siteId()]] parameters based on a given element.
     *
     * ---
     *
     * ```twig
     * {# Fetch {elements} created for this entry #}
     * {% set {elements-var} = {twig-method}
     *     .owner(myEntry)
     *     .all() %}
     * ```
     *
     * ```php
     * // Fetch {elements} created for this entry
     * ${elements-var} = {php-method}
     *     ->owner($myEntry)
     *     ->all();
     * ```
     *
     * @param ElementInterface $owner The owner element
     * @return static self reference
     * @uses $ownerId
     */
    public function owner(ElementInterface $owner)
    {
        $this->ownerId = [$owner->id];
        $this->siteId = $owner->siteId;
        return $this;
    }

    /**
     * Narrows the query results based on whether the dates’ owners are drafts.
     *
     * Possible values include:
     *
     * | Value | Fetches {elements}…
     * | - | -
     * | `true` | which can belong to a draft.
     * | `false` | which cannot belong to a draft.
     *
     * @param bool|null $value The property value
     * @return static self reference
     * @uses $allowOwnerDrafts
     */
    public function allowOwnerDrafts($value = true)
    {
        $this->allowOwnerDrafts = $value;
        return $this;
    }

    /**
     * Narrows the query results based on whether the dates’ owners are revisions.
     *
     * Possible values include:
     *
     * | Value | Fetches {elements}…
     * | - | -
     * | `true` | which can belong to a revision.
     * | `false` | which cannot belong to a revision.
     *
     * @param bool|null $value The property value
     * @return static self reference
     * @uses $allowOwnerDrafts
     */
    public function allowOwnerRevisions($value = true)
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
        $this->query->select([
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
            $this->subQuery->andWhere(['recurring_dates.fieldId' => $this->fieldId]);
        }

        // Filter by owner ID
        if ($this->ownerId) {
            $this->subQuery->andWhere(['recurring_dates.ownerId' => $this->ownerId]);
        }

        // Ignore revision/draft dates by default
        $allowOwnerDrafts = $this->allowOwnerDrafts ?? ($this->id || $this->ownerId);
        $allowOwnerRevisions = $this->allowOwnerRevisions ?? ($this->id || $this->ownerId);

        if (!$allowOwnerDrafts || !$allowOwnerRevisions) {
            $this->subQuery->innerJoin(['owners' => Table::ELEMENTS], '[[owners.id]] = [[recurring_dates.ownerId]]');

            if (!$allowOwnerDrafts) {
                $this->subQuery->andWhere(['owners.draftId' => null]);
            }

            if (!$allowOwnerRevisions) {
                $this->subQuery->andWhere(['owners.revisionId' => null]);
            }
        }

        return parent::beforePrepare();
    }

    /**
     * Normalizes the fieldId param to an array of IDs or null
     *
     * @throws QueryAbortedException
     */
    private function normalizeFieldId()
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
            $this->fieldId = [$this->fieldId];
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
     * @throws InvalidConfigException
     */
    private function normalizeOwnerId()
    {
        if (empty($this->ownerId)) {
            $this->ownerId = null;
        } elseif (is_numeric($this->ownerId)) {
            $this->ownerId = [$this->ownerId];
        } elseif (!is_array($this->ownerId) || !ArrayHelper::isNumeric($this->ownerId)) {
            throw new InvalidConfigException('Invalid ownerId param value');
        }
    }
}
