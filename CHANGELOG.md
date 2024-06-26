# Changelog

## 1.0.0-beta.7 - 2024-05-30

* Fix queries

## 1.0.0-beta.6 - 2024-03-25

* Show past occurrence in preview too
* Fix sorting

## 1.0.0-beta.5 - 2024-02-06

### Fixed

* Fix sorting for main query

## 1.0.0-beta.4 - 2024-02-05

### Fixed

* Fix loading of past occurrence

## 1.0.0-beta.3 - 2024-01-31

### Fixed

* Fix exception bug

## 1.0.0-beta.2 - 2024-01-02

### Fixed

* Fix missing id column for occurrences on installation
* Adds indexes for occurrences

## 1.0.0-beta.1 - 2024-01-02

### Fixed

* Fix broken query for next/last occurrence
* Set time for all days events to start and end of a day

## 1.0.0-alpha.4 - 2023-12-11

### Breaking

* *Breaking*: Removed `withOngoingDates()` from queries, use "Include ongoing occurrences" in field settings
* *Breaking*: Removed `getNextOccurrence()`, `getNextOrLastOccurrence()` and `getOccurrences()` on `Entry`, access occurrences via field

### Added

* Access the next occurrence via field: `$entry->myField->getNextOccurrence()`

### Removed

* `Gewerk\RecurringDates\Behavior\ElementBehavior`
* `Gewerk\RecurringDates\Behavior\ElementQueryBehavior`

## 1.0.0-alpha.3 - 2023-12-05

### Breaking

* *Breaking*: Removed `Gewerk\RecurringDates\Model\Occurrence::fromArray()`, use `new Occurrence($config)` instead

### Fixed

* Fix missing types
* Cleanup frontend configuration

## 1.0.0-alpha.2 - 2023-12-05

### Breaking

* *Breaking*: Moved `date_range` Twig function into variable: `{{ craft.recurringDates.formatRange() }}`
* *Breaking*: Renamed Twig function for ICS url: `craft.ics.url()` to `craft.recurringDates.icsUrl()`
* *Breaking*: Renamed Twig function for ICS file: `craft.ics.get()` to `craft.recurringDates.ics()`

### Added

* Next occurrence can be displayed as sortable table column in entries index
* Add support for date conditions (based on the next occurrence)
* Create queries in Twig templates: `{{ craft.recurringDates.query({ ownerId: 1 }) }}`
* `Gewerk\RecurringDates\Model\Occurrence::format()` to return a date range directly from occurrence
* `Gewerk\RecurringDates\Model\Occurrence::$isPast`
* `Gewerk\RecurringDates\Model\Occurrence::getIsPast()`
* `Gewerk\RecurringDates\Model\Occurrence::$isUpcoming`
* `Gewerk\RecurringDates\Model\Occurrence::getIsUpcoming()`
* `Gewerk\RecurringDates\Model\Occurrence::$isAllDay`
* `Gewerk\RecurringDates\Model\Occurrence::getIsAllDay()`
* `Gewerk\RecurringDates\Model\Occurrence::$isMultiDay`
* `Gewerk\RecurringDates\Model\Occurrence::getIsMultiDay()`

### Fixed

* Fix transitions deadlocks
* Use configured Craft CMS system timezone for inputs

## 1.0.0-alpha.1 - 2023-11-24

### Fixed

* Check if owner is defined before accessing

## 1.0.0-alpha.0 - 2023-10-23

### Breaking

* *Upgrade to Craft CMS 4.0*
* *Breaking*: Replaced `Gewerk\RecurringDates\Event\IcsEventElementEvent::$eventComponent` with `Gewerk\RecurringDates\Event\IcsEventElementEvent::$icalEvent` and a new `ICalEvent` model
* Upgraded `eluceo/ical` to version 2.7

## 0.6.3 - 2023-09-05

* Fix for wrong translation

## 0.6.2 - 2022-05-25

* Fix saving elements
* Check if datetime exists before normalizing

## 0.6.1 - 2022-05-24

* Fix occurrences without start and end date

## 0.6.0 - 2022-05-18

* Use Craft webpack asset pipeline
* Use PSR-12 code formatting
* Create occurrences synchronous
* Catch empty start/end date when element is serialized

## 0.5.1 - 2022-03-16

* Fix: Make sure all occurrences deleted after saving

## 0.5.0 - 2022-02-14

* New: Support for revision views
* Update translations
* Refactor generation of occurrences

## 0.4.2 - 2022-02-10

* Fix: Wrong mapping for first occurrence

## 0.4.1 - 2022-02-10

* Fix: Wrong mapping for first occurrence

## 0.4.0 - 2022-02-10

- New: Saves first occurrence directly. Queue will be only used for recurring occurrences.
- Fix: Fix undefined index

## 0.3.4 - 2021-11-08

- Fix: Convert record data to correct types

## 0.3.3 - 2021-10-26

- Fix: Don't show elements with occurrences multiple times

## 0.3.2 - 2021-10-26

- Fix: Remove double source date from occurrences
- Fix: Fix sticky recurring setting
- Fix: Always generate all occurrences
- Fix: Catch recurr exceptions

## 0.3.1 - 2021-10-25

- Fix: Fix unsavable elements while migration

## 0.3.0 - 2021-10-25

- New: Add an option to migration for offset and sites
- New: Complete German translation
- Fix: Add fallbacks for missing values
- Fix: Catch UnsupportedSiteException while migration
- Fix: Check if dates from Calendarize are really DateTime objects

## 0.2.0 - 2021-10-24

- Use eluceo/ical to support PHP 7.3

## 0.1.0 - 2021-10-22

- Initial release
