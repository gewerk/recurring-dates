<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Service;

use Craft;
use craft\base\Component;
use craft\base\ElementInterface;
use craft\db\Query;
use craft\helpers\ArrayHelper;
use craft\helpers\Db;
use craft\helpers\ElementHelper;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Plugin;
use Recurr\Transformer\ArrayTransformer;
use Recurr\Transformer\Constraint\BetweenConstraint;

/**
 * Service component for the recurring dates field.
 *
 * @package Gewerk\RecurringDates\Service
 */
class FieldService extends Component
{
    /**
     * Saves a recurring date field
     *
     * @param RecurringDatesField $field
     * @param ElementInterface $owner
     * @return void
     */
    public function saveElements(RecurringDatesField $field, ElementInterface $owner): void
    {
        /** @var RecurringDateElementQuery $query */
        $query = $owner->getFieldValue($field->handle);

        if (($recurringDates = $query->getCachedResult()) !== null) {
            $saveAll = false;
        } else {
            $recurringDates = (clone $query)->status(null)->all();
            $saveAll = true;
        }

        $ids = [];
        $sortOrder = 0;

        /** @var RecurringDateElement[] $recurringDates */
        foreach ($recurringDates as $recurringDate) {
            $sortOrder++;

            if ($saveAll || !$recurringDate->id || $recurringDate->dirty) {
                $recurringDate->ownerId = $owner->id;
                $recurringDate->sortOrder = $sortOrder;
                Craft::$app->getElements()->saveElement($recurringDate, false);
            } elseif ((int) $recurringDate->sortOrder !== $sortOrder) {
                $recurringDate->sortOrder = $sortOrder;
                Db::update(Plugin::DATES_TABLE, [
                    'sortOrder' => $sortOrder,
                ], [
                    'id' => $recurringDate->id,
                ], [], false);
            }

            $ids[] = $recurringDate->id;
        }

        // Delete any elements that shouldn't be there anymore
        $this->deleteOtherElements($field, $owner, $ids);
    }

    /**
     * Duplicates a RecurringDateElement
     *
     * @param RecurringDatesField $field
     * @param ElementInterface $source
     * @param ElementInterface $target
     */
    public function duplicateElements(
        RecurringDatesField $field,
        ElementInterface $source,
        ElementInterface $target,
    ): void {
        /** @var RecurringDateElementQuery $query */
        $query = $source->getFieldValue($field->handle);

        if (($recurringDates = $query->getCachedResult()) === null) {
            $recurringDates = (clone $query)->status(null)->all();
        }

        $ids = [];

        /** @var RecurringDateElement[] $recurringDates */
        foreach ($recurringDates as $recurringDate) {
            $newAttributes = [
                'canonicalId' => $target->getIsDerivative() ? $recurringDate->id : null,
                'ownerId' => $target->id,
                'owner' => $target,
                'siteId' => $target->siteId,
                'propagating' => false,
            ];

            if ($target->updatingFromDerivative && $recurringDate->getIsDerivative()) {
                /** @var RecurringDateElement */
                $newRecurringDate = Craft::$app->getElements()->updateCanonicalElement(
                    $recurringDate,
                    $newAttributes
                );
            } else {
                /** @var RecurringDateElement */
                $newRecurringDate = Craft::$app->getElements()->duplicateElement($recurringDate, $newAttributes);
            }

            $ids[] = $newRecurringDate->id;
        }

        // Delete any elements that shouldn't be there anymore
        $this->deleteOtherElements($field, $target, $ids);
    }

    /**
     * Merges canonical changes
     *
     * @param RecurringDatesField $field
     * @param ElementInterface $owner
     * @return void
     */
    public function mergeCanonicalChanges(RecurringDatesField $field, ElementInterface $owner): void
    {
        // Get the owner across all sites
        $localizedOwners = $owner::find()
            ->id($owner->id ?: false)
            ->siteId(['not', $owner->siteId])
            ->drafts($owner->getIsDraft())
            ->provisionalDrafts($owner->isProvisionalDraft)
            ->revisions($owner->getIsRevision())
            ->status(null)
            ->ignorePlaceholders()
            ->indexBy('siteId')
            ->all();

        $localizedOwners[$owner->siteId] = $owner;

        // Get the canonical owner across all sites
        $canonicalOwners = $owner::find()
            ->id($owner->getCanonicalId())
            ->siteId(array_keys($localizedOwners))
            ->status(null)
            ->ignorePlaceholders()
            ->all();

        $elementsService = Craft::$app->getElements();

        foreach ($canonicalOwners as $canonicalOwner) {
            // Get all the canonical owner’s elements, including soft-deleted ones
            $canonicalElements = RecurringDateElement::find()
                ->fieldId($field->id)
                ->ownerId($canonicalOwner->id)
                ->siteId($canonicalOwner->siteId)
                ->status(null)
                ->trashed(null)
                ->ignorePlaceholders()
                ->all();

            // Get all the derivative owner’s elements, so we can compare
            $derivativeElements = RecurringDateElement::find()
                ->fieldId($field->id)
                ->ownerId($owner->id)
                ->siteId($canonicalOwner->siteId)
                ->status(null)
                ->trashed(null)
                ->ignorePlaceholders()
                ->indexBy('canonicalId')
                ->all();

            foreach ($canonicalElements as $canonicalElement) {
                if (isset($derivativeElements[$canonicalElement->id])) {
                    $derivativeElement = $derivativeElements[$canonicalElement->id];

                    // Has it been soft-deleted?
                    if ($canonicalElement->trashed) {
                        // Delete the derivative element too, unless any changes were made to it
                        if ($derivativeElement->dateUpdated == $derivativeElement->dateCreated) {
                            $elementsService->deleteElement($derivativeElement);
                        }
                    } elseif (!$derivativeElement->trashed && ElementHelper::isOutdated($derivativeElement)) {
                        // Merge the upstream changes into the derivative element
                        $elementsService->mergeCanonicalChanges($derivativeElement);
                    }
                } elseif (!$canonicalElement->trashed && $canonicalElement->dateCreated > $owner->dateCreated) {
                    // This is a new element, so duplicate it into the derivative owner
                    $elementsService->duplicateElement($canonicalElement, [
                        'canonicalId' => $canonicalElement->id,
                        'ownerId' => $owner->id,
                        'owner' => $localizedOwners[$canonicalElement->siteId],
                        'siteId' => $canonicalElement->siteId,
                        'propagating' => false,
                    ]);
                }
            }
        }
    }

    /**
     * Delete other elements
     *
     * @param RecurringDatesField $field The Matrix field
     * @param ElementInterface $owner The owner element
     * @param int[] $except
     * @return void
     */
    private function deleteOtherElements(RecurringDatesField $field, ElementInterface $owner, array $except): void
    {
        $elementsToDelete = RecurringDateElement::find()
            ->status(null)
            ->ownerId($owner->id)
            ->fieldId($field->id)
            ->siteId($owner->siteId)
            ->andWhere(['not', ['elements.id' => $except]])
            ->all();

        $elementsService = Craft::$app->getElements();

        foreach ($elementsToDelete as $elementToDelete) {
            $elementsService->deleteElement($elementToDelete);
        }
    }

    /**
     * Saves occurrences for an recurring date.
     *
     * @param RecurringDateElement $element
     * @return void
     */
    public function saveOccurrences(RecurringDateElement $element): void
    {
        $occurrences = [];

        if ($rrule = $element->getRruleInstance()) {
            $transformer = new ArrayTransformer();
            $after = (clone $element->endDate)->modify('+1 second');
            $before = (clone $after)->modify('+3 years');
            $constraint = new BetweenConstraint($after, $before, true);
            $recurrences = $transformer->transform($rrule, $constraint);

            foreach ($recurrences as $recurrence) {
                $occurrences[] = [
                    'startDate' => $recurrence->getStart(),
                    'endDate' => $recurrence->getEnd(),
                    'allDay' => $element->allDay,
                ];
            }
        }

        $savedOccurrences = (new Query())
            ->from(Plugin::OCCURRENCES_TABLE)
            ->where([
                'dateId' => $element->id,
                'siteId' => $element->siteId,
                'first' => false,
            ])
            ->all();

        // Remove occurrences that are already saved
        $unsavedOccurrences = [];
        foreach ($occurrences as $index => $occurrence) {
            $matches = ArrayHelper::whereMultiple($savedOccurrences, [
                'startDate' => Db::prepareDateForDb($occurrence['startDate']),
                'endDate' => Db::prepareDateForDb($occurrence['endDate']),
                'allDay' => (int) $occurrence['allDay'],
            ]);

            if (count($matches) > 0) {
                unset($occurrences[$index]);

                $keys = array_keys($matches);
                unset($savedOccurrences[$keys[0]]);
            } else {
                $unsavedOccurrences[] = [
                    'dateId' => $element->id,
                    'elementId' => $element->ownerId,
                    'siteId' => $element->siteId,
                    'fieldId' => $element->fieldId,
                    'startDate' => Db::prepareDateForDb($occurrence['startDate']),
                    'endDate' => Db::prepareDateForDb($occurrence['endDate']),
                    'allDay' => (int) $occurrence['allDay'],
                ];
            }
        }

        // Remove no more needed occurrences
        if (count($savedOccurrences) > 0) {
            Db::delete(
                Plugin::OCCURRENCES_TABLE,
                [
                    'dateId' => ArrayHelper::getColumn($savedOccurrences, 'dateId'),
                    'elementId' => ArrayHelper::getColumn($savedOccurrences, 'elementId'),
                    'siteId' => ArrayHelper::getColumn($savedOccurrences, 'siteId'),
                    'fieldId' => ArrayHelper::getColumn($savedOccurrences, 'fieldId'),
                    'startDate' => ArrayHelper::getColumn($savedOccurrences, 'startDate'),
                    'endDate' => ArrayHelper::getColumn($savedOccurrences, 'endDate'),
                    'allDay' => ArrayHelper::getColumn($savedOccurrences, 'allDay'),
                ]
            );
        }

        // Batch insert missing occurrences
        Db::batchInsert(
            Plugin::OCCURRENCES_TABLE,
            ['dateId', 'elementId', 'siteId', 'fieldId', 'startDate', 'endDate', 'allDay'],
            array_map('array_values', $unsavedOccurrences)
        );
    }
}
