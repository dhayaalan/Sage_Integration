import { Component, Element, Prop, State, h, Method, Event, Watch, } from '@stencil/core';
import { parse, format, addMinutes, isMatch, startOfDay, endOfDay, } from 'date-fns';
import { TranslationController } from '../../global/Translation';
import { renderHiddenField } from '../../utils';
export class Timepicker {
  constructor() {
    /**
     * State for all the time values
     */
    this.timeValues = [];
    /**
     * Set true to disable the element
     */
    this.disabled = false;
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Time interval between the values displayed in the list, specified in minutes.
     */
    this.interval = 30;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute's value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Theme based on which the input of the timepicker is styled.
     */
    this.state = 'normal';
    /**
     * Hint text displayed below the text box.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the text box.
     */
    this.warningText = '';
    /**
     * Error text displayed below the text box.
     */
    this.errorText = '';
    /**
     * Label displayed on the interface, for the component.
     */
    this.label = '';
    /**
     * Placement of the options list with respect to timepicker.
     */
    this.optionsPlacement = 'bottom';
    /**
     * Whether the arrow/caret should be shown in the timepicker.
     */
    this.caret = true;
    /**
     * Whether the dropdown should be same width as that of the input.
     */
    this.sameWidth = true;
    /**
     * Whether clicking on the already selected option disables it.
     */
    this.allowDeselect = true;
    /**
     * If true, the user cannot type in the text input
     */
    this.readonly = false;
    this.getTimeOptionsMeta = (nonMeridianFormat) => {
      const preferredFormat = this.format;
      const timeIntervalArgs = {
        interval: this.interval,
        startTime: format(parse(this.minTime, preferredFormat, new Date()), nonMeridianFormat, {
          locale: this.langModule,
        }),
        endTime: format(parse(this.maxTime, preferredFormat, new Date()), nonMeridianFormat, {
          locale: this.langModule,
        }),
      };
      return timeIntervalArgs;
    };
    this.setTimeValues = () => {
      const nonMeridianFormat = 'HH:mm';
      const { interval, startTime, endTime } = this.getTimeOptionsMeta(nonMeridianFormat);
      let currentTimeInMs = parse(startTime, nonMeridianFormat, new Date()).valueOf();
      const endTimeInMs = parse(endTime, nonMeridianFormat, new Date()).valueOf();
      while (currentTimeInMs <= endTimeInMs) {
        this.timeValues.push({
          displayFormat: format(currentTimeInMs, this.format, {
            locale: this.langModule,
          }),
          value: format(currentTimeInMs, nonMeridianFormat, {
            locale: this.langModule,
          }),
        });
        currentTimeInMs = addMinutes(currentTimeInMs, interval).valueOf();
      }
    };
    this.onBlur = (e) => {
      this.fwBlur.emit({
        event: e,
        name: this.name,
      });
    };
    this.onFocus = () => {
      this.fwFocus.emit();
    };
  }
  currentTimeLabel(time) {
    return time.displayFormat;
  }
  currentTimeValue(time) {
    return time.value;
  }
  setTimeValue(e) {
    const { value } = e.detail;
    if (value)
      this.fwChange.emit({
        event: e,
        name: this.name,
        value: value,
      });
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Sets focus on a specific `fw-timepicker`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  async handleLocaleChange(newLocale) {
    var _a, _b;
    this.langModule = await TranslationController.getDateLangModule(newLocale);
    this.format =
      this.format || ((_b = (_a = this.langModule) === null || _a === void 0 ? void 0 : _a.formatLong) === null || _b === void 0 ? void 0 : _b.time({ width: 'short' }));
    this.minTime = isMatch(this.minTime, this.format)
      ? this.minTime
      : format(startOfDay(new Date()), this.format);
    this.maxTime = isMatch(this.maxTime, this.format)
      ? this.maxTime
      : format(endOfDay(new Date()), this.format);
  }
  async componentWillLoad() {
    await this.handleLocaleChange(this.locale);
    this.setTimeValues();
  }
  render() {
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    return (h("fw-select", { name: this.name, label: this.label, hintText: this.hintText, errorText: this.errorText, warningText: this.warningText, disabled: this.disabled, value: this.value, required: this.required, onFwChange: (e) => this.setTimeValue(e), onFwBlur: this.onBlur, ref: (el) => (this.nativeInput = el), state: this.state, placeholder: this.placeholder, optionsPlacement: this.optionsPlacement, caret: this.caret, sameWidth: this.sameWidth, allowDeselect: this.allowDeselect, readonly: this.readonly }, this.timeValues.map((time) => (h("fw-select-option", { value: this.currentTimeValue(time) }, this.currentTimeLabel(time))))));
  }
  static get is() { return "fw-timepicker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["timepicker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["timepicker.css"]
  }; }
  static get properties() { return {
    "format": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Format in which time values are populated in the list box. If the value is hh:mm a, the time values are in the 12-hour format. If the value is hh:mm, the time values are in the 24-hr format.\nThe default value will be set based on the locale time format."
      },
      "attribute": "format",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set true to disable the element"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Time value. The value is always in the non meridian format i.e., HH:mm"
      },
      "attribute": "value",
      "reflect": false
    },
    "name": {
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
        "text": "Name of the component, saved as part of form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "interval": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Time interval between the values displayed in the list, specified in minutes."
      },
      "attribute": "interval",
      "reflect": false,
      "defaultValue": "30"
    },
    "minTime": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Lower time-limit for the values displayed in the list. The default value will be set based on the locale time format."
      },
      "attribute": "min-time",
      "reflect": false
    },
    "maxTime": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Upper time-limit for the values displayed in the list. The default value will be set based on the locale time format."
      },
      "attribute": "max-time",
      "reflect": false
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute's value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'warning' | 'error'",
        "resolved": "\"error\" | \"normal\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the input of the timepicker is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "hintText": {
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
        "text": "Hint text displayed below the text box."
      },
      "attribute": "hint-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "warningText": {
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
        "text": "Warning text displayed below the text box."
      },
      "attribute": "warning-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "errorText": {
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
        "text": "Error text displayed below the text box."
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "label": {
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
        "text": "Label displayed on the interface, for the component."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text displayed in the select before an option is selected."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "optionsPlacement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverPlacementType",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Placement of the options list with respect to timepicker."
      },
      "attribute": "options-placement",
      "reflect": true,
      "defaultValue": "'bottom'"
    },
    "caret": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the arrow/caret should be shown in the timepicker."
      },
      "attribute": "caret",
      "reflect": false,
      "defaultValue": "true"
    },
    "locale": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Locale for which timePicker needs to be shown. Defaults to browser's current locale."
      },
      "attribute": "locale",
      "reflect": false
    },
    "sameWidth": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the dropdown should be same width as that of the input."
      },
      "attribute": "same-width",
      "reflect": false,
      "defaultValue": "true"
    },
    "allowDeselect": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether clicking on the already selected option disables it."
      },
      "attribute": "allow-deselect",
      "reflect": false,
      "defaultValue": "true"
    },
    "readonly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, the user cannot type in the text input"
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "timeValues": {},
    "langModule": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when a value is selected or deselected from the list box options."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwBlur",
      "name": "fwBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the list box loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFocus",
      "name": "fwFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the list box comes into focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on a specific `fw-timepicker`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "locale",
      "methodName": "handleLocaleChange"
    }]; }
}
