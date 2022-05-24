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
 * Deletes empty occurrences and disallows them forever
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m220524_000000_disallow_empty_occurrences extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->execute(<<<SQL
            DELETE FROM {{%recurring_dates_occurrences}}
            WHERE [[recurring_dates_occurrences.startDate]] IS NULL
            OR [[recurring_dates_occurrences.endDate]] IS NULL
            SQL
        );

        $this->alterColumn(Plugin::OCCURRENCES_TABLE, 'startDate', $this->dateTime()->notNull());
        $this->alterColumn(Plugin::OCCURRENCES_TABLE, 'endDate', $this->dateTime()->notNull());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }
}
