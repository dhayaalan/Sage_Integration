'use strict';

const indexE1f984e1 = require('./index-e1f984e1-d2bc94f6.js');
const indexDc611d24 = require('./index-dc611d24-355bee26.js');
const index5f0fd88a = require('./index-5f0fd88a-ae47bf77.js');

var dateFormats = {
  full: 'EEEE d MMMM y',
  "long": 'd MMMM y',
  medium: 'd MMM y',
  "short": 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  "long": 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  "short": 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'à' {{time}}",
  "long": "{{date}} 'à' {{time}}",
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
 * @summary French locale.
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */

var locale = {
  code: 'fr',
  formatDistance: indexE1f984e1.formatDistance,
  formatLong: formatLong,
  formatRelative: index5f0fd88a.formatRelative,
  localize: indexE1f984e1.localize,
  match: indexE1f984e1.match,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};

exports.default = locale;
