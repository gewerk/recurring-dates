<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Behavior;

use craft\elements\db\ElementQuery;
use yii\base\Behavior;

/**
 * Extends the element query with options for querying recurring dates.
 *
 * @property ElementQuery $owner
 * @package Gewerk\RecurringDates\Behavior
 */
class ElementQueryBehavior extends Behavior
{
    /** @var bool|string|string[] */
    public $withOngoingDates = true;

    /**
     * Sets if query should include ongoing dates. A boolean values enables or
     * disables this option for all fields. A field handle or an array of field
     * handles can also be provided, for which this option will be enabled.
     *
     * @param bool|string|string[] $value
     * @return void
     */
    public function setWithOngoingDates($value)
    {
        $this->withOngoingDates = $value;
    }

    /**
     * Returns the current value for if ongoing should be included in the query.
     *
     * @return bool|string|string[]
     */
    public function getWithOngoingDates()
    {
        return $this->withOngoingDates;
    }
}
