import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const CustomCellUser = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.name = '';
    this.size = 18;
    this.color = '#647A8E';
    this.library = 'crayons';
    this.src = null;
  }
  render() {
    return (h("fw-icon", { name: this.name, size: this.size, color: this.color, library: this.library, src: this.src }));
  }
}, [1, "fw-custom-cell-icon", {
    "name": [1],
    "size": [2],
    "color": [1],
    "library": [1],
    "src": [8]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-custom-cell-icon", "fw-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-custom-cell-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CustomCellUser);
      }
      break;
    case "fw-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { CustomCellUser as C, defineCustomElement as d };
