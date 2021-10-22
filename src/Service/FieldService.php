<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Service;

use Craft;
use craft\base\Component;
use craft\base\ElementInterface;
use craft\helpers\Db;
use craft\helpers\ElementHelper;
use Gewerk\RecurringDates\Element\RecurringDateElement;
use Gewerk\RecurringDates\Element\Query\RecurringDateElementQuery;
use Gewerk\RecurringDates\Field\RecurringDatesField;
use Gewerk\RecurringDates\Plugin;
use Throwable;

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
     * @param MatrixField $field
     * @param ElementInterface $owner
     */
    public function saveElements(RecurringDatesField $field, ElementInterface $owner)
    {
        /** @var RecurringDateElementQuery $query */
        $query = $owner->getFieldValue($field->handle);

        /** @var RecurringDateElement[] $recurringDates */
        if (($recurringDates = $query->getCachedResult()) !== null) {
            $saveAll = false;
        } else {
            $recurringDates = (clone $query)->anyStatus()->all();
            $saveAll = true;
        }

        $ids = [];
        $sortOrder = 0;

        $transaction = Craft::$app->getDb()->beginTransaction();

        try {
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

            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();
            throw $e;
        }
    }

    /**
     * @param RecurringDatesField $field
     * @param ElementInterface $source
     * @param ElementInterface $target
     */
    public function duplicateElements(RecurringDatesField $field, ElementInterface $source, ElementInterface $target)
    {
        /** @var RecurringDateElementQuery $query */
        $query = $source->getFieldValue($field->handle);

        /** @var RecurringDateElement[] $recurringDates */
        if (($recurringDates = $query->getCachedResult()) === null) {
            $recurringDates = (clone $query)->anyStatus()->all();
        }

        $ids = [];

        $transaction = Craft::$app->getDb()->beginTransaction();

        try {
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
                    $newRecurringDate = Craft::$app->getElements()->updateCanonicalElement($recurringDate, $newAttributes);
                } else {
                    /** @var RecurringDateElement */
                    $newRecurringDate = Craft::$app->getElements()->duplicateElement($recurringDate, $newAttributes);
                }

                $ids[] = $newRecurringDate->id;
            }

            // Delete any elements that shouldn't be there anymore
            $this->deleteOtherElements($field, $target, $ids);

            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();
            throw $e;
        }
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
            ->anyStatus()
            ->ignorePlaceholders()
            ->indexBy('siteId')
            ->all();

        $localizedOwners[$owner->siteId] = $owner;

        // Get the canonical owner across all sites
        $canonicalOwners = $owner::find()
            ->id($owner->getCanonicalId())
            ->siteId(array_keys($localizedOwners))
            ->anyStatus()
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
     * @param RecurringDatesField $field The Matrix field
     * @param ElementInterface The owner element
     * @param int[] $except
     */
    private function deleteOtherElements(RecurringDatesField $field, ElementInterface $owner, array $except)
    {
        $elementsToDelete = RecurringDateElement::find()
            ->anyStatus()
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
}
