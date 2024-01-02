<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2024 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Migration;

use craft\db\Migration;
use Gewerk\RecurringDates\Plugin;

/**
 * Adds indexes for occurrences
 *
 * @package Gewerk\RecurringDates\Migration
 */
class m240102_000000_add_occurrence_indexes extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createIndexIfMissing(Plugin::OCCURRENCES_TABLE, ['elementId', 'siteId', 'fieldId', 'deleted', 'startDate'], false);
        $this->createIndexIfMissing(Plugin::OCCURRENCES_TABLE, ['elementId', 'siteId', 'fieldId', 'deleted', 'endDate'], false);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        return false;
    }
}
