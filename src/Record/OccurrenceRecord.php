<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Record;

use craft\db\ActiveRecord;
use Gewerk\RecurringDates\Plugin;

/**
 * A record of an occurrence
 *
 * @property int $id
 * @property int $dateId
 * @property int $elementId
 * @property int $fieldId
 * @property DateTime $startDate
 * @property DateTime $endDate
 * @property bool $allDay
 * @package Gewerk\RecurringDates\Record
 */
class OccurrenceRecord extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return Plugin::OCCURRENCES_TABLE;
    }
}
