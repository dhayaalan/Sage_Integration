import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './icon.js';

const menuItemCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.menu-item{cursor:pointer;display:-ms-flexbox;display:flex;padding-inline:8px;padding-block:6px;-webkit-margin-after:4px;margin-block-end:4px;line-height:1.45;-ms-flex-align:center;align-items:center;background:var(--fw-menu-item-background, #ffffff);border:var(--fw-menu-item-border);-webkit-box-shadow:var(--fw-menu-item-box-shadow);box-shadow:var(--fw-menu-item-box-shadow);border-radius:var(--fw-menu-item-border-radius);font-size:14px;word-break:break-word;word-wrap:break-word}.menu-item:hover{background-color:#ebeff3}.menu-item:focus{background-color:#ebeff3;outline:#2c5cc5 auto 1px}.menu-item .menu-item__label{-ms-flex:1 1 auto;flex:1 1 auto}.menu-item .menu-item__prefix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-item .menu-item__prefix ::slotted(*){-webkit-margin-end:8px;margin-inline-end:8px}.menu-item .menu-item__suffix{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.menu-item .menu-item__suffix ::slotted(*){-webkit-margin-start:8px;margin-inline-start:8px}.menu-item .menu-item__check{width:24px;height:24px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;visibility:hidden}.menu-item.selected{font-weight:600;background-color:#e5f2fd}.menu-item.selected:hover,.menu-item.selected:focus{background-color:#e5f2fd}.menu-item.selected .menu-item__check{visibility:visible}";

const MenuItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
     */
    this.selected = false;
    /**
     * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
     */
    this.selectable = false;
  }
  toggleSelect() {
    this.selected = !this.selected;
  }
  render() {
    return (h("div", { class: { 'menu-item': true, 'selected': this.selected }, role: 'menuitem', tabIndex: -1, onMouseDown: () => {
        this.selectable && this.toggleSelect();
      } }, h("span", { class: 'menu-item__prefix' }, h("slot", { name: 'prefix' })), h("span", { class: 'menu-item__label' }, h("slot", null)), h("span", { class: 'menu-item__suffix' }, h("slot", { name: 'suffix' })), this.selectable && (h("span", { class: 'menu-item__check' }, h("fw-icon", { name: 'check', size: 12, color: '#2C5CC5', library: 'system' })))));
  }
  get el() { return this; }
  static get style() { return menuItemCss; }
}, [1, "fw-menu-item", {
    "selected": [1540],
    "selectable": [1540]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-menu-item", "fw-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuItem);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const FwMenuItem = MenuItem;
const defineCustomElement = defineCustomElement$1;

export { FwMenuItem, defineCustomElement };
