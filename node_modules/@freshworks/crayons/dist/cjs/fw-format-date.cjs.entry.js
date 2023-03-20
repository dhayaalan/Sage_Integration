'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const formatDateUtil = require('./format-date-util-9e5fbd49.js');

const FormatDate = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** The date/time to format. If not set, the current date and time will be used. */
    this.date = new Date();
    /** When set, 24 hour time will always be used. */
    this.hourFormat = 'auto';
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === 'auto' ? undefined : this.hourFormat === '12';
    // Check if the given date is invalid.
    if (isNaN(date.getMilliseconds())) {
      console.error(`Invalid date ${this.date}`);
      return;
    }
    {
      return formatDateUtil.formatDate({
        date: date,
        locale: this.locale,
        options: {
          weekday: this.weekday,
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second,
          timeZoneName: this.timeZoneName,
          timeZone: this.timeZone,
          hour12: hour12,
        },
      });
    }
  }
};

exports.fw_format_date = FormatDate;
