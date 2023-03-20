import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const tabPanelCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;padding:0;width:var(--fw-tab-panel-width, \"inherit\");height:var(--fw-tab-panel-height, \"inherit\")}";

let counter = 0;
const Panel = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The panel name.
     */
    this.name = '';
    /**
     * If true sets the panel display to block, none otherwise.
     */
    this.active = false;
  }
  connectedCallback() {
    if (!this.el.id) {
      this.el.id = `fw-tab-panel-${counter++}`;
    }
  }
  render() {
    this.el.style.display = this.active ? 'block' : 'none';
    return (h(Host, { role: 'tabpanel', "aria-hidden": this.active ? 'false' : 'true' }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return tabPanelCss; }
}, [1, "fw-tab-panel", {
    "name": [513],
    "active": [516]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-tab-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-tab-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Panel);
      }
      break;
  } });
}
defineCustomElement();

export { Panel as P, defineCustomElement as d };
