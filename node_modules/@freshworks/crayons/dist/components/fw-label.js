import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const labelCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{--fw-label-padding-vertical:5px;--fw-label-padding-horizontal:8px}.label{color:#6f7c87;border:1px solid #dadfe3;background-color:#fff;font-weight:600;line-height:20px;font-size:12px;padding-block:var(--fw-label-padding-vertical);padding-inline:var(--fw-label-padding-horizontal);display:inline-block;border-radius:4px}.label--blue{background-color:#e5f2fd;color:#2c5cc5;border:1px solid #bbdcfe}.label--red{background-color:#ffecf0;color:#d72d30;border:1px solid #ffd0d6}.label--green{background-color:#e0f5f1;color:#00795b;border:1px solid #b4e5da}.label--yellow{background-color:#fef1e1;color:#e86f25;border:1px solid #fedcb3}.label--grey{background-color:#ebeff3;color:#475867;border:none}";

const Label = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Theme based on which the label is styled.
     */
    this.color = 'normal';
    /**
     * Display text in the label.
     */
    this.value = '';
  }
  render() {
    return (h("span", { class: 'label label--' + this.color.toLowerCase() }, this.value));
  }
  static get style() { return labelCss; }
}, [1, "fw-label", {
    "color": [1],
    "value": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-label"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Label);
      }
      break;
  } });
}
defineCustomElement$1();

const FwLabel = Label;
const defineCustomElement = defineCustomElement$1;

export { FwLabel, defineCustomElement };
