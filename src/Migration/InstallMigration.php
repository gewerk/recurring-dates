<?php
/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 */

namespace Gewerk\RecurringDates\Migration;

use craft\db\Migration;
use craft\db\Table;
use Gewerk\RecurringDates\Plugin;

/**
 * Creates tables for this plugin
 *
 * @package Gewerk\RecurringDates\Migration
 */
class InstallMigration extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Dates
        $this->createTable(Plugin::DATES_TABLE, [
            'id' => $this->primaryKey(),
            'ownerId' => $this->integer()->notNull(),
            'fieldId' => $this->integer()->notNull(),
            'startDate' => $this->dateTime(),
            'endDate' => $this->dateTime(),
            'allDay' => $this->boolean()->defaultValue(false),
            'rrule' => $this->text(),
            'count' => $this->integer(),
            'untilDate' => $this->dateTime(),
            'sortOrder' => $this->smallInteger(),
            'deletedWithOwner' => $this->boolean()->defaultValue(false),
            'dateCreated' => $this->dateTime()->notNull(),
            'dateUpdated' => $this->dateTime()->notNull(),
            'uid' => $this->uid(),
        ]);

        // Foreign keys
        $this->addForeignKey(null, Plugin::DATES_TABLE, ['id'], Table::ELEMENTS, ['id'], 'CASCADE', null);
        $this->addForeignKey(null, Plugin::DATES_TABLE, ['ownerId'], Table::ELEMENTS, ['id'], 'CASCADE', null);
        $this->addForeignKey(null, Plugin::DATES_TABLE, ['fieldId'], Table::FIELDS, ['id'], 'CASCADE', null);

        // Occurrences
        $this->createTable(Plugin::OCCURRENCES_TABLE, [
            'id' => $this->primaryKey(),
            'dateId' => $this->integer()->notNull(),
            'elementId' => $this->integer()->notNull(),
            'siteId' => $this->integer()->notNull(),
            'fieldId' => $this->integer()->notNull(),
            'startDate' => $this->dateTime(),
            'endDate' => $this->dateTime(),
            'allDay' => $this->boolean()->defaultValue(false),
            'dateCreated' => $this->dateTime()->notNull(),
            'dateUpdated' => $this->dateTime()->notNull(),
            'uid' => $this->uid(),
        ]);

        // Indexes
        $this->createIndex(null, Plugin::OCCURRENCES_TABLE, 'startDate', false);
        $this->createIndex(null, Plugin::OCCURRENCES_TABLE, 'endDate', false);

        // Foreign keys
        $this->addForeignKey(null, Plugin::OCCURRENCES_TABLE, ['dateId'], Plugin::DATES_TABLE, ['id'], 'CASCADE', null);
        $this->addForeignKey(null, Plugin::OCCURRENCES_TABLE, ['elementId'], Table::ELEMENTS, ['id'], 'CASCADE', null);
        $this->addForeignKey(null, Plugin::OCCURRENCES_TABLE, ['siteId'], Table::SITES, ['id'], 'CASCADE', null);
        $this->addForeignKey(null, Plugin::OCCURRENCES_TABLE, ['fieldId'], Table::FIELDS, ['id'], 'CASCADE', null);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        // Delete tables
        $this->dropTableIfExists(Plugin::OCCURRENCES_TABLE);
        $this->dropTableIfExists(Plugin::DATES_TABLE);
    }
}
