import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const buttonGroupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}";

const ButtonGroup = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.label = '';
  }
  componentDidLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    if (!this.host)
      return;
    const slottedElements = this.host.querySelectorAll('fw-button');
    slottedElements.forEach((button, index) => {
      button.classList.add('fw-button-group__button');
      button.classList.toggle('fw-button-group__button--first', index === 0);
      button.classList.toggle('fw-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
      button.classList.toggle('fw-button-group__button--last', index === slottedElements.length - 1);
    });
  }
  render() {
    return (h(Host, { "aria-label": this.label }, h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  get host() { return this; }
  static get style() { return buttonGroupCss; }
}, [1, "fw-button-group", {
    "label": [1025]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonGroup);
      }
      break;
  } });
}
defineCustomElement();

export { ButtonGroup as B, defineCustomElement as d };
