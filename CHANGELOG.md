# Changelog

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
