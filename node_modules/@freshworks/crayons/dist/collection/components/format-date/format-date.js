import { Component, Prop } from '@stencil/core';
import { formatDate } from './format-date-util';
export class FormatDate {
  constructor() {
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
  static get is() { return "fw-format-date"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "date": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "Date | string | number",
        "resolved": "Date | number | string",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The date/time to format. If not set, the current date and time will be used."
      },
      "attribute": "date",
      "reflect": false,
      "defaultValue": "new Date()"
    },
    "locale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The locale to use when formatting the date/time."
      },
      "attribute": "locale",
      "reflect": false
    },
    "weekday": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'narrow' | 'short' | 'long'",
        "resolved": "\"long\" | \"narrow\" | \"short\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the weekday."
      },
      "attribute": "weekday",
      "reflect": false
    },
    "year": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit'",
        "resolved": "\"2-digit\" | \"numeric\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the year."
      },
      "attribute": "year",
      "reflect": false
    },
    "month": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit' | 'narrow' | 'short' | 'long'",
        "resolved": "\"2-digit\" | \"long\" | \"narrow\" | \"numeric\" | \"short\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the month."
      },
      "attribute": "month",
      "reflect": false
    },
    "day": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit'",
        "resolved": "\"2-digit\" | \"numeric\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the day."
      },
      "attribute": "day",
      "reflect": false
    },
    "hour": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit'",
        "resolved": "\"2-digit\" | \"numeric\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the hour."
      },
      "attribute": "hour",
      "reflect": false
    },
    "minute": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit'",
        "resolved": "\"2-digit\" | \"numeric\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the minute."
      },
      "attribute": "minute",
      "reflect": false
    },
    "second": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'numeric' | '2-digit'",
        "resolved": "\"2-digit\" | \"numeric\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the second."
      },
      "attribute": "second",
      "reflect": false
    },
    "hourFormat": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'auto' | '12' | '24'",
        "resolved": "\"12\" | \"24\" | \"auto\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When set, 24 hour time will always be used."
      },
      "attribute": "hour-format",
      "reflect": false,
      "defaultValue": "'auto'"
    },
    "timeZoneName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'short' | 'long'",
        "resolved": "\"long\" | \"short\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The format for displaying the time."
      },
      "attribute": "time-zone-name",
      "reflect": false
    },
    "timeZone": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The time zone to express the time in."
      },
      "attribute": "time-zone",
      "reflect": false
    }
  }; }
}
