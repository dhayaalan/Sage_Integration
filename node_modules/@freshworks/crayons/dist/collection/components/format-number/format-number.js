import { Component, Prop } from '@stencil/core';
export class FormatNumber {
  constructor() {
    /** Number to format. */
    this.value = 0;
    /** Formatting style */
    this.type = 'decimal';
    /** Turns on/off grouping separators. */
    this.useGrouping = true;
    /** Currency display formatting. */
    this.currencyDisplay = 'symbol';
    /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.
     * You can enable the above by setting the currencySign option to `accounting`.
     * The default value is `standard`
     */
    this.currencySign = 'standard';
    /** The minimum number of integer digits to use. Possible values are 1 - 21.
     * Default is 1
     */
    this.minimumIntegerDigits = 1;
    /** The minimum number of significant digits to use. Possible values are 1 - 21.
     * Default is 1
     */
    this.minimumSignificantDigits = 1;
    /** The maximum number of significant digits to use,. Possible values are 1 - 21.
     * Default is 21
     */
    this.maximumSignificantDigits = 21;
  }
  render() {
    if (isNaN(this.value)) {
      return '';
    }
    return new Intl.NumberFormat(this.locale, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      currencySign: this.currencySign,
      useGrouping: this.useGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
    }).format(this.value);
  }
  static get is() { return "fw-format-number"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "value": {
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
        "text": "Number to format."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "0"
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
        "text": "`Locale` used for formatting the number"
      },
      "attribute": "locale",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'currency' | 'decimal' | 'percent'",
        "resolved": "\"currency\" | \"decimal\" | \"percent\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Formatting style"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'decimal'"
    },
    "useGrouping": {
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
        "text": "Turns on/off grouping separators."
      },
      "attribute": "use-grouping",
      "reflect": false,
      "defaultValue": "true"
    },
    "currency": {
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
        "text": "The currency to use in currency formatting.\nPossible values are the `ISO 4217` currency codes, such as `USD` for the US dollar, `EUR` for the euro.\nIf the style is \"currency\", the currency property must be provided."
      },
      "attribute": "currency",
      "reflect": false
    },
    "currencyDisplay": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'symbol' | 'narrowSymbol' | 'code' | 'name'",
        "resolved": "\"code\" | \"name\" | \"narrowSymbol\" | \"symbol\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Currency display formatting."
      },
      "attribute": "currency-display",
      "reflect": false,
      "defaultValue": "'symbol'"
    },
    "currencySign": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'accounting' | 'standard'",
        "resolved": "\"accounting\" | \"standard\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.\nYou can enable the above by setting the currencySign option to `accounting`.\nThe default value is `standard`"
      },
      "attribute": "currency-sign",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "minimumIntegerDigits": {
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
        "text": "The minimum number of integer digits to use. Possible values are 1 - 21.\nDefault is 1"
      },
      "attribute": "minimum-integer-digits",
      "reflect": false,
      "defaultValue": "1"
    },
    "minimumFractionDigits": {
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
        "text": "The minimum number of fraction digits to use. Possible values are 0 - 20."
      },
      "attribute": "minimum-fraction-digits",
      "reflect": false
    },
    "maximumFractionDigits": {
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
        "text": "The maximum number of fraction digits to use. Possible values are 0 - 20."
      },
      "attribute": "maximum-fraction-digits",
      "reflect": false
    },
    "minimumSignificantDigits": {
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
        "text": "The minimum number of significant digits to use. Possible values are 1 - 21.\nDefault is 1"
      },
      "attribute": "minimum-significant-digits",
      "reflect": false,
      "defaultValue": "1"
    },
    "maximumSignificantDigits": {
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
        "text": "The maximum number of significant digits to use,. Possible values are 1 - 21.\nDefault is 21"
      },
      "attribute": "maximum-significant-digits",
      "reflect": false,
      "defaultValue": "21"
    }
  }; }
}
