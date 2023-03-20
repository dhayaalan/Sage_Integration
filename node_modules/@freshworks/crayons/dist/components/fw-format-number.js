import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const FormatNumber = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
}, [1, "fw-format-number", {
    "value": [2],
    "locale": [1],
    "type": [1],
    "useGrouping": [4, "use-grouping"],
    "currency": [1],
    "currencyDisplay": [1, "currency-display"],
    "currencySign": [1, "currency-sign"],
    "minimumIntegerDigits": [2, "minimum-integer-digits"],
    "minimumFractionDigits": [2, "minimum-fraction-digits"],
    "maximumFractionDigits": [2, "maximum-fraction-digits"],
    "minimumSignificantDigits": [2, "minimum-significant-digits"],
    "maximumSignificantDigits": [2, "maximum-significant-digits"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-format-number"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-format-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FormatNumber);
      }
      break;
  } });
}
defineCustomElement$1();

const FwFormatNumber = FormatNumber;
const defineCustomElement = defineCustomElement$1;

export { FwFormatNumber, defineCustomElement };
