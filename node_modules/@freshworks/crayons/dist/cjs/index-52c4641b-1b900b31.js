'use strict';

const indexE1f984e1 = require('./index-e1f984e1-d2bc94f6.js');
const index5f0fd88a = require('./index-5f0fd88a-ae47bf77.js');
const indexDc611d24 = require('./index-dc611d24-355bee26.js');

var dateFormats = {
  full: 'EEEE d MMMM y',
  "long": 'd MMMM y',
  medium: 'd MMM y',
  "short": 'yy-MM-dd'
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

// Same as fr
/**
 * @type {Locale}
 * @category Locales
 * @summary French locale (Canada).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 * @author Gabriele Petrioli [@gpetrioli]{@link https://github.com/gpetrioli}
 */

var locale = {
  code: 'fr-CA',
  formatDistance: indexE1f984e1.formatDistance,
  formatLong: formatLong,
  formatRelative: index5f0fd88a.formatRelative,
  localize: indexE1f984e1.localize,
  match: indexE1f984e1.match,
  // Unique for fr-CA
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

exports.default = locale;
