'use strict';

const indexF5fe0470 = require('./index-f5fe0470-2656364b.js');
const index3a85bc08 = require('./index-3a85bc08-794b6650.js');
const indexDc611d24 = require('./index-dc611d24-355bee26.js');

var dateFormats = {
  full: 'EEEE, d MMMM yyyy',
  "long": 'd MMMM, yyyy',
  medium: 'd MMM, yyyy',
  "short": 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  "long": 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  "short": 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  "long": "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: indexDc611d24.buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: indexDc611d24.buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: indexDc611d24.buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (India).
 * @language English
 * @iso-639-2 eng
 * @author Galeel Bhasha Satthar [@gbhasha]{@link https://github.com/gbhasha}
 */

var locale = {
  code: 'en-IN',
  formatDistance: indexF5fe0470.formatDistance,
  formatLong: formatLong,
  formatRelative: index3a85bc08.formatRelative,
  localize: index3a85bc08.localize,
  match: index3a85bc08.match,
  options: {
    weekStartsOn: 1,
    // Monday is the first day of the week.
    firstWeekContainsDate: 4 // The week that contains Jan 4th is the first week of the year.

  }
};

exports.default = locale;
