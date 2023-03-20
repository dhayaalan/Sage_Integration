import { Component, Prop, h, State, Element, Event, Watch, Method, } from '@stencil/core';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { renderHiddenField } from '../../utils';
import countries from './countries';
export class CountryPhone {
  constructor() {
    /**
     * Helps to stop unwanted rendering when value is updated from inside the component
     */
    this.isValueUpdatedFromInside = false;
    /**
     * Disable phone number input when invalid phone number or empty string is provided
     */
    this.disablePhoneInput = true;
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
     */
    this.clearInput = false;
    /**
     * Hide Country Name in the Country Select
     */
    this.hideCountryName = false;
    /**
     * Hide Country Flag in the Country Select
     */
    this.hideCountryFlag = false;
    /**
     * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
     */
    this.readonly = false;
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
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
     *
     * Theme based on which the text box is styled.
     */
    this.state = 'normal';
    /**
     * Default value displayed in the input box & select dropdown after extracting valid phone number
     */
    this.value = '';
  }
  /**
   * Checks PhoneNumber is Valid or Not
   *
   * @param { string } value PhoneNumber
   * @param {CountryCode} countryCode
   * @returns { boolean } after validation PhoneNumber with countryCode
   * */
  async isValidPhoneNumber(value, countryCode) {
    return isValidPhoneNumber(value, countryCode);
  }
  /**
   * Validates PhoneNumber provided and return extra details
   *
   * @param { string } value PhoneNumber
   * @returns { Object } {countryCode, countryCallingCode, nationalNumber,  number, metadata }
   * */
  async parsePhoneNumber(...args) {
    return parsePhoneNumber.apply(this, args);
  }
  watchPhoneDetails(newValue, oldValue) {
    if (!this.isValueUpdatedFromInside &&
      newValue &&
      oldValue &&
      newValue !== oldValue) {
      this.setPhoneNumberDetails(newValue);
    }
    // Donot break value since its updated from inside, otherwise will endup infinite loop
    if (this.isValueUpdatedFromInside) {
      this.isValueUpdatedFromInside = false;
    }
  }
  componentWillLoad() {
    this.setPhoneNumberDetails(this.value);
  }
  getSingleFormat(code = '', number = '') {
    return '+' + code + number;
  }
  updateValue() {
    let val = '';
    if (this.phoneCode) {
      val = `+${this.phoneCode}`;
    }
    if (this.phoneNumber) {
      val += `${this.phoneNumber}`;
    }
    this.value = val;
    this.isValueUpdatedFromInside = true;
  }
  setPhoneNumberDetails(input) {
    if (input) {
      try {
        let userInput;
        if (input.includes('+')) {
          userInput = input;
        }
        else {
          userInput = '+' + input;
        }
        const details = parsePhoneNumber(userInput);
        this.countryCode = details.country;
        this.phoneCode = details.countryCallingCode;
        this.phoneNumber = details.nationalNumber;
        this.countryName = this.getCountryName(details.country);
        this.disablePhoneInput = false;
      }
      catch (_) {
        if (!this.isValueUpdatedFromInside) {
          this.phoneNumber = input.includes('+')
            ? input.replace('+', '')
            : input;
        }
      }
    }
  }
  getMeta(isValid) {
    return {
      meta: {
        isValid,
        countryCode: this.countryCode,
        countryName: this.countryName,
        phoneCode: this.phoneCode,
      },
    };
  }
  onInputBlur(event) {
    event.stopPropagation();
    const value = event.target.value;
    this.phoneNumber = value;
    const isValid = isValidPhoneNumber(value, this.countryCode);
    this.updateValue();
    this.fwBlur.emit(Object.assign({ event, name: this.name, value: this.getSingleFormat(this.phoneCode, value) }, this.getMeta(isValid)));
  }
  onInput(event) {
    event.stopPropagation();
    const value = event.target.value;
    this.phoneNumber = value;
    const isValid = isValidPhoneNumber(value, this.countryCode);
    this.updateValue();
    this.fwInput.emit(Object.assign({ event, name: this.name, value: this.getSingleFormat(this.phoneCode, value) }, this.getMeta(isValid)));
  }
  onInputClear(event) {
    event.stopPropagation();
    const value = event.target.value;
    this.updateValue();
    this.fwInputClear.emit(Object.assign({ event, name: this.name, value: this.getSingleFormat(this.phoneCode, value) }, this.getMeta(false)));
  }
  onInputFocus(event) {
    event.stopPropagation();
    const value = event.target.value;
    this.updateValue();
    this.fwFocus.emit(Object.assign({ event, name: this.name, value: this.getSingleFormat(this.phoneCode, value) }, this.getMeta(false)));
  }
  getCountryDetails(value) {
    return countries.filter((r) => r.code2l === value);
  }
  getCountryName(inputCountryCode) {
    var _a;
    const currentCountry = this.getCountryDetails(inputCountryCode);
    return (currentCountry &&
      currentCountry.length > 0 &&
      ((_a = currentCountry[0]) === null || _a === void 0 ? void 0 : _a.country_name));
  }
  onSelectChange(event) {
    var _a, _b;
    event.stopPropagation();
    const value = event.target.value;
    this.countryCode = value;
    const currentCountry = this.getCountryDetails(value);
    if (currentCountry && currentCountry.length > 0) {
      this.phoneCode = ((_a = currentCountry[0]) === null || _a === void 0 ? void 0 : _a.phone) || '';
      this.countryName = ((_b = currentCountry[0]) === null || _b === void 0 ? void 0 : _b.country_name) || '';
      this.phoneNumber = '';
    }
    else {
      this.phoneCode = '';
      this.countryName = '';
      this.phoneNumber = '';
    }
    this.isValueUpdatedFromInside = true;
    this.updateValue();
  }
  render() {
    /**
     * @todo : Add new features
     * 1. give option to include countries
     * 2. give option to exclude countries
     * */
    const { host, name, value } = this;
    renderHiddenField(host, name, value);
    return (h("div", { class: 'country-container' },
      h("div", { class: 'country-select-container' },
        h("fw-select", { id: 'fw-country-phone-select', label: this.selectLabel, readonly: this.readonly, required: this.required, value: this.countryCode, placeholder: this.selectPlaceholder || '', onFwChange: this.onSelectChange.bind(this), sameWidth: false, disabled: this.disabled }, countries.map((item) => {
          return (h("fw-select-option", { value: item.code2l, key: item.country_name, "data-phone": item.phone },
            h("span", null,
              h("span", { class: 'desc' },
                !this.hideCountryFlag && (h("span", { class: 'flag' }, item.emoji)),
                '  ',
                "+",
                item.phone,
                ' '),
              !this.hideCountryName && (h("span", { class: 'countryName' },
                "- ",
                item.country_name)))));
        }))),
      h("div", { class: 'country-input-container' },
        h("fw-input", { id: 'fw-country-phone-input', label: this.inputLabel, "hint-text": this.hintText, "warning-text": this.warningText, "error-text": this.errorText, state: this.state, placeholder: this.inputPlaceholder || '', readonly: this.readonly, required: this.required, clearInput: this.clearInput, value: this.phoneNumber, onFwInput: this.onInput.bind(this), onFwInputClear: this.onInputClear.bind(this), onFwFocus: this.onInputFocus.bind(this), disabled: this.disabled, onFwBlur: this.onInputBlur.bind(this), name: this.name }))));
  }
  static get is() { return "fw-country-phone"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["country-phone.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["country-phone.css"]
  }; }
  static get properties() { return {
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
    "clearInput": {
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
        "text": "Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute\u2019s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box."
      },
      "attribute": "clear-input",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideCountryName": {
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
        "text": "Hide Country Name in the Country Select"
      },
      "attribute": "hide-country-name",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideCountryFlag": {
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
        "text": "Hide Country Flag in the Country Select"
      },
      "attribute": "hide-country-flag",
      "reflect": false,
      "defaultValue": "false"
    },
    "selectPlaceholder": {
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
        "text": "Text displayed in the text box before a user enters a value."
      },
      "attribute": "select-placeholder",
      "reflect": false
    },
    "inputPlaceholder": {
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
        "text": "Text displayed in the text box before a user enters a value."
      },
      "attribute": "input-placeholder",
      "reflect": false
    },
    "inputLabel": {
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
        "text": "* Label displayed on the interface, for the input component."
      },
      "attribute": "input-label",
      "reflect": false
    },
    "selectLabel": {
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
        "text": "* Label displayed on the interface, for the input component."
      },
      "attribute": "select-label",
      "reflect": false
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
        "text": "If true, the user cannot enter a value in the input box. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "readonly",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Disables the component on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "\nTheme based on which the text box is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string | null",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Default value displayed in the input box & select dropdown after extracting valid phone number"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "phoneNumber": {},
    "isValueUpdatedFromInside": {},
    "countryCode": {},
    "countryName": {},
    "disablePhoneInput": {},
    "phoneCode": {}
  }; }
  static get events() { return [{
      "method": "fwInput",
      "name": "fwInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when phone element is input."
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
        "text": "Triggered when phone element is blur."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwInputClear",
      "name": "fwInputClear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when clear icon is clicked."
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
        "text": "Triggered when input is focused."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "isValidPhoneNumber": {
      "complexType": {
        "signature": "(value: string, countryCode: CountryCode) => Promise<boolean>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "value PhoneNumber"
              }],
            "text": "PhoneNumber"
          }, {
            "tags": [{
                "name": "param",
                "text": "countryCode"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "CountryCode": {
            "location": "import",
            "path": "libphonenumber-js/types"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Checks PhoneNumber is Valid or Not",
        "tags": [{
            "name": "param",
            "text": "value PhoneNumber"
          }, {
            "name": "param",
            "text": "countryCode"
          }, {
            "name": "returns",
            "text": "after validation PhoneNumber with countryCode"
          }]
      }
    },
    "parsePhoneNumber": {
      "complexType": {
        "signature": "(...args: any[]) => Promise<any>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "Validates PhoneNumber provided and return extra details",
        "tags": [{
            "name": "param",
            "text": "value PhoneNumber"
          }, {
            "name": "returns",
            "text": "{countryCode, countryCallingCode, nationalNumber,  number, metadata }"
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "watchPhoneDetails"
    }]; }
}
