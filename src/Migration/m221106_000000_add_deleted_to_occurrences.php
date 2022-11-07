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
 * Adds column for deleted occurrences
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m221106_000000_add_deleted_to_occurrences extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists(Plugin::OCCURRENCES_TABLE, 'deleted')) {
            $this->addColumn(
                Plugin::OCCURRENCES_TABLE,
                'deleted',
                $this->boolean()->defaultValue(false),
            );
        }

        $this->execute(<<<SQL
            UPDATE {{%recurring_dates_occurrences}}
            INNER JOIN {{%elements}} ON [[elements.id]] = [[recurring_dates_occurrences.dateId]]
            INNER JOIN {{%elements_sites}} ON [[elements_sites.elementId]] = [[elements.id]]
            SET [[recurring_dates_occurrences.deleted]] = 1
            WHERE [[elements.dateDeleted]] IS NOT NULL
            SQL
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }
}
