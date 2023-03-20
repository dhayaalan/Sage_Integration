import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

function formatDate({ date, locale, options, } = {
  date: new Date(),
  locale: [],
  options: {},
}) {
  const dt = new Date(date);
  // Check for an invalid date
  if (isNaN(dt.getMilliseconds())) {
    return undefined;
  }
  return new Intl.DateTimeFormat(locale || [], {
    weekday: options.weekday,
    year: options.year,
    month: options.month,
    day: options.day,
    hour: options.hour,
    minute: options.minute,
    second: options.second,
    timeZoneName: options.timeZoneName,
    timeZone: options.timeZone,
    hour12: options.hour12,
  }).format(dt);
}

const FormatDate = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
      return formatDate({
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
}, [1, "fw-format-date", {
    "date": [8],
    "locale": [1],
    "weekday": [1],
    "year": [1],
    "month": [1],
    "day": [1],
    "hour": [1],
    "minute": [1],
    "second": [1],
    "hourFormat": [1, "hour-format"],
    "timeZoneName": [1, "time-zone-name"],
    "timeZone": [1, "time-zone"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-format-date"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-format-date":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FormatDate);
      }
      break;
  } });
}
defineCustomElement$1();

const FwFormatDate = FormatDate;
const defineCustomElement = defineCustomElement$1;

export { FwFormatDate, defineCustomElement, formatDate as f };
