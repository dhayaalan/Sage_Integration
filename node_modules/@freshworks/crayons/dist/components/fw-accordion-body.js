import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const accordionBodyCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.accordion-body{font-size:var(--fw-accordion-body-font-size, 14px);line-height:var(--fw-accordion-body-line-height, 18px);background-color:var(--fw-accordion-body-background-color, #f5f7f9);padding:var(--fw-accordion-body-padding, 20px);border-end-start-radius:var(--fw-accordion-border-radius, 8px);border-end-end-radius:var(--fw-accordion-border-radius, 8px);border-start-end-radius:0;border-start-start-radius:0}.accordion-body.collapsed{display:none}.accordion-body.no-bounding-box{border-radius:0}";

const AccordionBody = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * @internal
     */
    this.type = 'default';
  }
  render() {
    return (h("div", { class: {
        'accordion-body': true,
        'collapsed': !this.expanded,
        'no-bounding-box': this.type === 'no_bounding_box',
      } }, h("slot", null)));
  }
  static get style() { return accordionBodyCss; }
}, [1, "fw-accordion-body", {
    "expanded": [4],
    "type": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-accordion-body"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-accordion-body":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccordionBody);
      }
      break;
  } });
}
defineCustomElement$1();

const FwAccordionBody = AccordionBody;
const defineCustomElement = defineCustomElement$1;

export { FwAccordionBody, defineCustomElement };
