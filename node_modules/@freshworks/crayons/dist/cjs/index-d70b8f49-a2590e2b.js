'use strict';

const indexE1f984e1 = require('./index-e1f984e1-d2bc94f6.js');
const indexDc611d24 = require('./index-dc611d24-355bee26.js');

var dateFormats = {
  full: 'EEEE d MMMM y',
  "long": 'd MMMM y',
  medium: 'd MMM y',
  "short": 'dd.MM.y'
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

var formatRelativeLocale = {
  lastWeek: "eeee 'la semaine dernière à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'la semaine prochaine à' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

// Same as fr
/**
 * @type {Locale}
 * @category Locales
 * @summary French locale (Switzerland).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
 * @author Alex Hoeing [@dcbn]{@link https://github.com/dcbn}
 */

var locale = {
  code: 'fr-CH',
  formatDistance: indexE1f984e1.formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
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
