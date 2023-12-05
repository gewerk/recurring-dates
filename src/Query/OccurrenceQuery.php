<?php

/**
 * @link https://gewerk.dev/plugins/recurring-dates
 * @copyright 2021 gewerk, Dennis Morhardt
 * @license https://github.com/gewerk/recurring-dates/blob/main/LICENSE.md
 */

namespace Gewerk\RecurringDates\Query;

use craft\db\Query;
use Gewerk\RecurringDates\Model\Occurrence;

/**
 * Occurrence query
 *
 * @method Occurrence[] all($db = null)
 * @method Occurrence|null one($db = null)
 * @method Occurrence|null nth(int $n, Connection $db = null)
 * @package Gewerk\RecurringDates\Query
 */
class OccurrenceQuery extends Query
{
    /**
     * @inheritdoc
     * @param array<string, mixed> $rows
     * @return Occurrence[]
     */
    public function populate($rows): array
    {
        if (empty($rows)) {
            return [];
        }

        return array_map(function($occurrence) {
            return new Occurrence($occurrence);
        }, $rows);
    }
}
