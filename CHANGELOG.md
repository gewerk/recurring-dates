# Changelog

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
