<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2023 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Migration;

use craft\db\Migration;
use Gewerk\RecurringDates\Plugin;

/**
 * Adds primary column for occurrences
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m231219_000000_add_id_to_occurrences extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'id')) {
            $this->addColumn(
                Plugin::OCCURRENCES_TABLE,
                'id',
                $this->primaryKey()->first(),
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }
}
