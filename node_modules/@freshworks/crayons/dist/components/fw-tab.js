import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host(:focus-visible){outline:none;border-radius:4px;-webkit-box-shadow:inset 0 0 0 2px #2c5cc5;box-shadow:inset 0 0 0 2px #2c5cc5;border:none;-webkit-padding-after:0;padding-block-end:0}:host(:focus-visible) .tab.active{-webkit-border-after:none;border-block-end:none}.tab{display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;cursor:pointer;-ms-flex-align:center;align-items:center;padding-inline:8px;padding-block:10px;line-height:20px;color:#475867;font-size:14px;font-weight:400;margin-inline:4px;margin-block:0;}.tab:hover:not(.disabled){-webkit-padding-after:8px;padding-block-end:8px;-webkit-border-after:var(--fw-tab-border-block-end, 2px solid #92a2b1);border-block-end:var(--fw-tab-border-block-end, 2px solid #92a2b1)}.tab.active:not(.disabled){-webkit-padding-after:8px;padding-block-end:8px;-webkit-border-after:2px solid #2c5cc5;border-block-end:2px solid #2c5cc5;color:#2c5cc5;font-weight:600}.tab.disabled{cursor:not-allowed;color:#92a2b1}.tab:focus,.tab:focus-visible{outline:none}::slotted(a){text-decoration:none;color:#475867}";

let counter = 0;
const Tab = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  connectedCallback() {
    if (!this.tabName) {
      this.el.id = `fw-tab-${counter++}`;
    }
    else {
      this.el.id = this.tabName;
      this.el.removeAttribute('tab-name');
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.disabled || !this.active ? '-1' : '0', role: 'tab' }, h("div", { class: 'tab ' +
        (this.disabled ? 'disabled' : '') +
        (this.active ? 'active' : '') }, this.tabHeader ? this.tabHeader : h("slot", null))));
  }
  get el() { return this; }
  static get style() { return tabCss; }
}, [1, "fw-tab", {
    "tabName": [1, "tab-name"],
    "tabHeader": [1, "tab-header"],
    "disabled": [516],
    "active": [516],
    "panel": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tab);
      }
      break;
  } });
}
defineCustomElement$1();

const FwTab = Tab;
const defineCustomElement = defineCustomElement$1;

export { FwTab, defineCustomElement };
