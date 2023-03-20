import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const menuCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.menu{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:var(--fw-menu-min-width);max-width:var(--fw-menu-max-width);min-height:var(--fw-menu-min-height, 10px);max-height:var(--fw-menu-max-height, 400px);border:var(--fw-menu-border, 1px solid #ebeff3);border-radius:var(--fw-menu-border-radius);-webkit-box-shadow:var(--fw-menu-box-shadow);box-shadow:var(--fw-menu-box-shadow)}";

const Menu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: 'menu', role: 'menu' }, h("slot", null)));
  }
  static get style() { return menuCss; }
}, [1, "fw-menu"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Menu);
      }
      break;
  } });
}
defineCustomElement$1();

const FwMenu = Menu;
const defineCustomElement = defineCustomElement$1;

export { FwMenu, defineCustomElement };
