<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Record;

use craft\db\ActiveRecord;
use craft\records\Element;
use DateTime;
use DateTimeInterface;
use Gewerk\RecurringDates\Plugin;
use yii\db\ActiveQueryInterface;

/**
 * A record of an running date.
 *
 * @property int|null $id
 * @property int|null $ownerId
 * @property int|null $fieldId
 * @property DateTime|null $startDate
 * @property DateTime|null $endDate
 * @property bool|null $allDay
 * @property string|null $rrule
 * @property int|null $count
 * @property DateTimeInterface|null $untilDate
 * @property int|null $sortOrder
 * @property bool $deletedWithOwner
 * @package Gewerk\RecurringDates\Record
 */
class RecurringDateRecord extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return Plugin::DATES_TABLE;
    }

    /**
     * Returns corresponding element
     *
     * @return ActiveQueryInterface
     */
    public function getElement(): ActiveQueryInterface
    {
        return $this->hasOne(Element::class, ['id' => 'id']);
    }

    /**
     * Returns corresponding owner element.
     *
     * @return ActiveQueryInterface The relational query object.
     */
    public function getOwner(): ActiveQueryInterface
    {
        return $this->hasOne(Element::class, ['id' => 'ownerId']);
    }
}
