<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2022 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Migration;

use craft\db\Migration;
use Gewerk\RecurringDates\Plugin;

/**
 * Drops unneeded columns
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m220214_000000_delete_columns extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if ($this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'dateCreated')) {
            $this->dropColumn(Plugin::OCCURRENCES_TABLE, 'dateCreated');
        }

        if ($this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'dateUpdated')) {
            $this->dropColumn(Plugin::OCCURRENCES_TABLE, 'dateUpdated');
        }

        if ($this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'uid')) {
            $this->dropColumn(Plugin::OCCURRENCES_TABLE, 'uid');
        }

        $this->alterColumn(Plugin::DATES_TABLE, 'deletedWithOwner', $this->boolean()->null());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }
}
