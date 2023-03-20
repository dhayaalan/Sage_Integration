import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const customCellAnchorCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.anchor{color:#2c5cc5;text-decoration:none;font-weight:600;display:inline-block;width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

const CustomCellAnchor = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = '';
    this.text = '';
    this.target = '_self';
  }
  render() {
    return (h("a", { class: 'anchor', href: this.href, target: this.target }, this.text));
  }
  static get style() { return customCellAnchorCss; }
}, [1, "fw-custom-cell-anchor", {
    "href": [1],
    "text": [1],
    "target": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-custom-cell-anchor"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-custom-cell-anchor":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CustomCellAnchor);
      }
      break;
  } });
}
defineCustomElement();

export { CustomCellAnchor as C, defineCustomElement as d };
