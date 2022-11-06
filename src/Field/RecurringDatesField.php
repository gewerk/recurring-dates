<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Field;

use Craft;
use craft\base\Element;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\base\PreviewableFieldInterface;
use craft\base\SortableFieldInterface;
use craft\db\Table;
use craft\elements\db\ElementQuery;
use craft\elements\db\ElementQueryInterface;
use craft\fields\conditions\DateFieldConditionRule;
use craft\helpers\Cp;
use craft\helpers\DateTimeHelper;
use craft\helpers\Db;
use craft\helpers\ElementHelper;
use craft\helpers\Html;
use craft\helpers\Json;
use craft\helpers\StringHelper;
use craft\services\Elements;
use craft\validators\ArrayValidator;
use craft\web\View;
use DateTime;
use Gewerk\RecurringDates\AssetBundle\RecurringDatesAssetBundle;
use Gewerk\RecurringDates\Behavior\ElementQueryBehavior;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Plugin;
use IntlDateFormatter;
use Recurr\DateExclusion;
use Recurr\Exception as RecurrException;
use Recurr\Rule;

/**
 * The main field
 *
 * @package Gewerk\RecurringDates\Field
 */
class RecurringDatesField extends Field implements PreviewableFieldInterface, SortableFieldInterface
{
    /**
     * @var int|null Min dates
     */
    public ?int $min = 0;

    /**
     * @var int|null Max dates
     */
    public ?int $max = null;

    /**
     * @var bool Allow recurring
     */
    public bool $allowRecurring = true;

    /**
     * @var bool Static
     */
    public bool $static = false;

    /**
     * @var bool Fixed field
     */
    private bool $fixed = false;

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('recurring-dates', 'Recurring Dates');
    }

    /**
     * @inheritdoc
     */
    public static function valueType(): string
    {
        return RecurringDateElementQuery::class;
    }

    /**
     * @inheritdoc
     */
    public static function hasContentColumn(): bool
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public static function supportedTranslationMethods(): array
    {
        return [
            self::TRANSLATION_METHOD_NONE,
        ];
    }

    /**
     * @inheritdoc
     */
    public function useFieldset(): bool
    {
        return true;
    }

    /**
     * @inheritdoc
     * @return string[][]
     */
    protected function defineRules(): array
    {
        $rules = parent::defineRules();
        $rules[] = [['min', 'max'], 'integer', 'min' => 0];

        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml(): ?string
    {
        return
            Cp::textFieldHtml([
                'label' => Craft::t('recurring-dates', 'Minimal number of dates'),
                'id' => 'min',
                'name' => 'min',
                'inputmode' => 'numeric',
                'type' => 'number',
                'steps' => '1',
                'value' => $this->min,
            ]) .
            Cp::textFieldHtml([
                'label' => Craft::t('recurring-dates', 'Maximal number of dates'),
                'id' => 'max',
                'name' => 'max',
                'inputmode' => 'numeric',
                'type' => 'number',
                'steps' => '1',
                'value' => $this->max,
            ]) .
            Cp::lightswitchFieldHtml([
                'label' => Craft::t('recurring-dates', 'Allow dates to be recurring'),
                'id' => 'allow-recurring',
                'name' => 'allowRecurring',
                'on' => $this->allowRecurring,
            ]) .
            Cp::lightswitchFieldHtml([
                'label' => Craft::t('recurring-dates', 'Make field static'),
                'id' => 'static',
                'name' => 'static',
                'on' => $this->static,
                'instructions' => Craft::t(
                    'recurring-dates',
                    'Static fields the number of dates can not be changed (the add/remove buttons are disabled)'
                ),
            ]);
    }

    /**
     * @inheritdoc
     */
    public function normalizeValue(mixed $value, ?ElementInterface $element = null): mixed
    {
        if ($value instanceof RecurringDateElementQuery) {
            return $value;
        }

        $query = $this->populateQuery(RecurringDateElement::find(), $element);

        if ($value === '') {
            $query->setCachedResult([]);
        } elseif ($element && is_array($value)) {
            $query->setCachedResult($this->populateQueryFromRequest($value, $element));
        }

        return $query;
    }

    /**
     * @inheritdoc
     */
    public function serializeValue(mixed $value, ?ElementInterface $element = null): mixed
    {
        /** @var RecurringDateElementQuery $value */
        $serialized = [];
        $new = 0;

        foreach ($value->all() as $recurringDate) {
            $recurringDateId = $recurringDate->id ?? 'new' . ++$new;
            $serialized[$recurringDateId] = $recurringDate->jsonSerialize();
        }

        return $serialized;
    }

    /**
     * @inheritdoc
     */
    public function getStaticHtml(mixed $value, ElementInterface $element): string
    {
        $this->fixed = true;
        $inputHtml = $this->inputHtml($value, $element);
        $this->fixed = false;

        return $inputHtml;
    }

    /**
     * @inheritdoc
     * @param RecurringDateElementQuery|null $value
     */
    protected function inputHtml(mixed $value, ElementInterface $element = null): string
    {
        // Register asset bundle
        /** @var View */
        $view = Craft::$app->getView();
        $view->registerAssetBundle(RecurringDatesAssetBundle::class);

        // Resolve value
        if ($element !== null && $element->hasEagerLoadedElements($this->handle)) {
            $value = $element->getEagerLoadedElements($this->handle);
        }

        if ($value instanceof RecurringDateElementQuery) {
            $value = $value->getCachedResult() ?? $value->limit(null)->status(null)->all();
        }

        // Get dates
        $dates = [];
        foreach ($value as $date) {
            $dates[] = [
                'id' => (string) $date->id,
                'errors' => $date->getErrors(),
                'fields' => $date->jsonSerialize(),
            ];
        }

        // Get settings
        $settings = [
            'min' => $this->min,
            'max' => $this->max,
            'allowRecurring' => $this->allowRecurring,
            'static' => $this->static,
            'fixed' => $this->fixed,
            'timezone' => Craft::$app->getTimeZone(),
        ];

        // Register js
        $id = $view->namespaceInputId($this->handle);
        $view->registerJs("new Craft.RecurringDates('{$id}');", View::POS_END);

        // Render field
        return Html::tag('recurring-dates', '', [
            ':value' => Json::encode($dates, JSON_UNESCAPED_UNICODE),
            ':settings' => Json::encode($settings, JSON_UNESCAPED_UNICODE),
            'name' => $this->handle,
            'id' => Html::id($this->handle),
        ]);
    }

    /**
     * @inheritdoc
     * @return array<int, mixed>
     */
    public function getElementValidationRules(): array
    {
        return [
            [
                'validateDates',
                'on' => [Element::SCENARIO_ESSENTIALS, Element::SCENARIO_DEFAULT, Element::SCENARIO_LIVE],
                'skipOnEmpty' => false,
            ],
        ];
    }

    /**
     * Validates all dates
     *
     * @param ElementInterface $element
     * @return void
     */
    public function validateDates(ElementInterface $element)
    {
        /** @var RecurringDateElementQuery $value */
        $value = $element->getFieldValue($this->handle);
        $dates = $value->all();
        $allDatesValidate = true;
        $scenario = $element->getScenario();

        foreach ($dates as $index => $date) {
            /** @var RecurringDateElement $date */
            if ($scenario === Element::SCENARIO_ESSENTIALS || $scenario === Element::SCENARIO_LIVE) {
                $date->setScenario($scenario);
            }

            if (!$date->validate()) {
                $element->addModelErrors($date, "{$this->handle}[{$index}]");
                $allDatesValidate = false;
            }
        }

        if (!$allDatesValidate) {
            $value->setCachedResult($dates);
        }

        if ($element->getScenario() === Element::SCENARIO_LIVE && ($this->min || $this->max)) {
            $arrayValidator = new ArrayValidator([
                'min' => $this->min ?: null,
                'max' => $this->max ?: null,
                'tooFew' => Craft::t(
                    'recurring-dates',
                    '{attribute} should contain at least {min, number} {min, plural, one{date} other{dates}}.'
                ),
                'tooMany' => Craft::t(
                    'recurring-dates',
                    '{attribute} should contain at most {max, number} {max, plural, one{date} other{dates}}.'
                ),
                'skipOnEmpty' => false,
            ]);

            if (!$arrayValidator->validate($dates, $error)) {
                $element->addError($this->handle, $error);
            }
        }
    }

    /**
     * @inheritdoc
     */
    public function getTableAttributeHtml(mixed $value, ElementInterface $element): string
    {
        /** @var RecurringDateElementQuery $value */
        $occurrence = $value->getOccurrences()[0] ?? null;

        if (!$occurrence) {
            return '-';
        }

        return Plugin::$plugin->getFormatService()->dateRange(
            $occurrence->startDate,
            $occurrence->endDate,
            IntlDateFormatter::MEDIUM,
            $occurrence->allDay ? IntlDateFormatter::NONE : IntlDateFormatter::SHORT,
        );
    }

    /**
     * @inheritdoc
     */
    public function isValueEmpty(mixed $value, ElementInterface $element): bool
    {
        /** @var RecurringDateElementQuery $value */
        return $value->count() === 0;
    }

    /**
     * @inheritdoc
     */
    public function beforeElementDelete(ElementInterface $element): bool
    {
        if (!parent::beforeElementDelete($element)) {
            return false;
        }

        foreach (Craft::$app->getSites()->getAllSiteIds() as $siteId) {
            $query = RecurringDateElement::find();
            $query->status(null);
            $query->siteId($siteId);
            $query->ownerId($element->id);

            /** @var RecurringDateElement[] $recurringDates */
            $recurringDates = $query->all();

            foreach ($recurringDates as $recurringDate) {
                $recurringDate->deletedWithOwner = true;
                Craft::$app->getElements()->deleteElement($recurringDate, $element->hardDelete);
            }
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function afterElementPropagate(ElementInterface $element, bool $isNew): void
    {
        $fieldService = Plugin::$plugin->getFieldService();
        $resetValue = false;

        if ($element->duplicateOf !== null) {
            $fieldService->duplicateElements($this, $element->duplicateOf, $element);
            $resetValue = true;
        } elseif ($element->isFieldDirty($this->handle) || !empty($element->newSiteIds)) {
            $fieldService->saveElements($this, $element);
        } elseif ($element->mergingCanonicalChanges) {
            $fieldService->mergeCanonicalChanges($this, $element);
            $resetValue = true;
        }

        if ($resetValue || $isNew) {
            /** @var RecurringDateElementQuery $query */
            $query = $this->populateQuery($element->getFieldValue($this->handle), $element);
            $query->clearCachedResult();
        }

        parent::afterElementPropagate($element, $isNew);
    }

    /**
     * @inheritdoc
     */
    public function afterElementRestore(ElementInterface $element): void
    {
        foreach (ElementHelper::supportedSitesForElement($element) as $siteInfo) {
            $recurringDates = RecurringDateElement::find()
                ->status(null)
                ->siteId($siteInfo['siteId'])
                ->ownerId($element->id)
                ->status(null)
                ->siteId($siteInfo['siteId'])
                ->trashed()
                ->andWhere(['recurring_dates.deletedWithOwner' => true])
                ->all();

            foreach ($recurringDates as $recurringDate) {
                Craft::$app->getElements()->restoreElement($recurringDate);
            }
        }

        parent::afterElementRestore($element);
    }

    /**
     * @inheritdoc
     */
    public function modifyElementsQuery(ElementQueryInterface $query, mixed $value): void
    {
        /** @var ElementQuery $query */
        if (!$value) {
            return;
        }

        // Prefix handle query
        $ns = $this->handle . '_' . StringHelper::randomString(5);

        // Where field
        $whereField = "[[occurrences_{$ns}.startDate]]";

        /** @var ElementQueryBehavior|null $elementQueryBehavior */
        $elementQueryBehavior = $query->getBehavior('recurring-dates');

        if (
            $elementQueryBehavior && (
                $elementQueryBehavior->withOngoingDates === true ||
                (is_array($elementQueryBehavior->withOngoingDates) &&
                in_array($this->handle, $elementQueryBehavior->withOngoingDates))
            )
        ) {
            $whereField = "[[occurrences_{$ns}.endDate]]";
        }

        // Build query
        $query->subQuery->addSelect([
            $this->handle => "[[occurrences_{$ns}.startDate]]",
        ]);

        $query->subQuery->innerJoin(
            ["occurrences_{$ns}" => Plugin::OCCURRENCES_TABLE],
            [
                'AND',
                "[[occurrences_{$ns}.fieldId]] = :fieldId",
                "[[occurrences_{$ns}.elementId]] = [[elements.id]]",
                "[[occurrences_{$ns}.siteId]] = [[elements_sites.siteId]]",
                Db::parseDateParam($whereField, $value),
            ],
            [
                ':fieldId' => $this->id,
            ],
        );

        $query->subQuery->innerJoin(
            ["elements_{$ns}" => Table::ELEMENTS],
            "[[elements_{$ns}.id]] = [[occurrences_{$ns}.dateId]]"
        );

        $query->subQuery->andWhere([
            "[[elements_{$ns}.dateDeleted]]" => null,
        ]);

        $query->subQuery->addGroupBy('[[elements.id]]');

        return;
    }

    /**
     * @inheritdoc
     */
    public function getSortOption(): array
    {
        return [
            'label' => Craft::t('site', $this->name),
            'orderBy' => ["occurrences_{$this->handle}.startDate", 'elements.id'],
            'attribute' => "field:$this->uid",
        ];
    }

    /**
     * @inheritdoc
     */
    public function getElementConditionRuleType(): array|string|null
    {
        return DateFieldConditionRule::class;
    }

    /**
     * Populates the field’s [[RecurringDateElementQuery]] value based on the owner element.
     *
     * @param RecurringDateElementQuery $query
     * @param ElementInterface|null $element
     * @return RecurringDateElementQuery
     */
    private function populateQuery(
        RecurringDateElementQuery $query,
        ElementInterface $element = null,
    ): RecurringDateElementQuery {
        if ($element && $element->id) {
            $query->ownerId = $element->id;

            if ($query->id === false) {
                $query->id = null;
            }
        } else {
            $query->id = false;
        }

        $query
            ->fieldId($this->id)
            ->siteId($element->siteId ?? null);

        return $query;
    }

    /**
     * Parses the recurring dates from request.
     *
     * @param mixed[]|array<int, array{dates: mixed[], sortOrder: string[]}> $value
     * @param ElementInterface $element
     * @return RecurringDateElement[]
     */
    private function populateQueryFromRequest(array $value, ElementInterface $element): array
    {
        /** @var RecurringDateElement[] */
        $existingRecurringDates = $element->id ? RecurringDateElement::find()
            ->fieldId($this->id)
            ->ownerId($element->id)
            ->siteId($element->siteId)
            ->status(null)
            ->indexBy('id')
            ->all() : [];

        // Get sort order and dates from request
        if (isset($value['dates']) || isset($value['sortOrder'])) {
            $newDates = $value['dates'] ?? [];
            $newSortOrder = $value['sortOrder'] ?? array_keys($existingRecurringDates);
        } else {
            $newDates = $value;
            $newSortOrder = array_keys($value);
        }

        /** @var RecurringDateElement|null */
        $prevRecurringDate = null;

        /** @var RecurringDateElement[] */
        $recurringDates = [];

        // Create entries
        foreach ($newSortOrder as $index => $id) {
            if (isset($newDates[$id])) {
                $data = $newDates[$id];
            } elseif (
                isset(Elements::$duplicatedElementSourceIds[$id]) &&
                isset($newDates[Elements::$duplicatedElementSourceIds[$id]])
            ) {
                $data = $newDates[Elements::$duplicatedElementSourceIds[$id]];
            } else {
                $data = [];
            }

            if (
                strpos($id, 'new') !== 0 && !isset($existingRecurringDates[$id]) &&
                isset(Elements::$duplicatedElementIds[$id]) &&
                isset($existingRecurringDates[Elements::$duplicatedElementIds[$id]])
            ) {
                $id = Elements::$duplicatedElementIds[$id];
            }

            if (isset($existingRecurringDates[$id])) {
                $recurringDate = $existingRecurringDates[$id];
                $recurringDate->dirty = !empty($data);
            } else {
                $recurringDate = new RecurringDateElement();
                $recurringDate->fieldId = $this->id;
                $recurringDate->ownerId = $element->id;
                $recurringDate->siteId = $element->siteId;
            }

            // Set owner
            $recurringDate->setOwner($element);

            // Set start and end date
            if (isset($data['startEnd'])) {
                if ($data['startEnd']['start'] instanceof DateTime) {
                    $recurringDate->startDate = clone $data['startEnd']['start'];
                } elseif (isset($data['startEnd']['start']['raw'])) {
                    $recurringDate->startDate = DateTimeHelper::toDateTime(
                        $data['startEnd']['start']['raw'],
                        assumeSystemTimeZone: true,
                    ) ?: null;
                } else {
                    $recurringDate->startDate = null;
                }

                if ($data['startEnd']['end'] instanceof DateTime) {
                    $recurringDate->endDate = clone $data['startEnd']['end'];
                } elseif (isset($data['startEnd']['end']['raw'])) {
                    $recurringDate->endDate = DateTimeHelper::toDateTime(
                        $data['startEnd']['end']['raw'],
                        assumeSystemTimeZone: true,
                    ) ?: null;
                } else {
                    $recurringDate->endDate = null;
                }
            }

            // Set all day
            if (isset($data['allDay'])) {
                $recurringDate->setAllDay((bool) $data['allDay']);
            }

            // Is event recurring
            if (isset($data['recurring']) && $data['recurring']) {
                try {
                    // Build base rule
                    $rrule = new Rule();
                    $rrule->setFreq($data['repeat']['frequency']);

                    // Interval
                    if (isset($data['repeat']['interval'])) {
                        $rrule->setInterval($data['repeat']['interval']);
                    }

                    // Month day
                    if (isset($data['repeat']['monthDay'])) {
                        $rrule->setByMonthDay($data['repeat']['monthDay']);
                    }

                    // Position
                    if (isset($data['repeat']['position'])) {
                        $rrule->setBySetPosition($data['repeat']['position']);
                    }

                    // Month
                    if (isset($data['repeat']['month'])) {
                        $rrule->setByMonth($data['repeat']['month']);
                    }

                    // Day
                    if (isset($data['repeat']['day'])) {
                        $rrule->setByDay($data['repeat']['day']);
                    }

                    // Add ending after number of executions or date
                    if ($data['repeat']['endsAfter'] === 'after') {
                        $rrule->setCount($data['repeat']['count'] ?? 1);
                    } elseif ($data['repeat']['endsAfter'] === 'onDate') {
                        $endsOn = $data['repeat']['endsOn'] ?? new DateTime();

                        if ($endsOn instanceof DateTime) {
                            $rrule->setUntil(clone $endsOn);
                        } else {
                            $rrule->setUntil(DateTimeHelper::toDateTime($endsOn['raw']));
                        }
                    }

                    // Add exceptions
                    if (isset($data['repeat']['exceptions'])) {
                        $exceptions = [];

                        foreach ($data['repeat']['exceptions'] as $exception) {
                            if (!($exception instanceof DateTime)) {
                                $exception = DateTimeHelper::toDateTime($exception['raw']);
                            }

                            $exceptions[] = new DateExclusion($exception, false);
                        }

                        $rrule->setExDates($exceptions);
                    }

                    $recurringDate->rrule = $rrule->getString();
                } catch (RecurrException $e) {
                    $recurringDate->addError('rrule', $e->getMessage());
                }
            } else {
                $recurringDate->rrule = null;
            }

            if ($prevRecurringDate instanceof ElementInterface) {
                $prevRecurringDate->setNext($recurringDate);
                $recurringDate->setPrev($prevRecurringDate);
            }

            $prevRecurringDate = $recurringDate;
            $recurringDates[] = $recurringDate;
        }

        return $recurringDates;
    }
}
