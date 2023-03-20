import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const modalContentCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:12px;padding-block-start:12px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}";

const ModalContent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'content' }, h("slot", null)));
  }
  static get style() { return modalContentCss; }
}, [1, "fw-modal-content"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["fw-modal-content"];
  components.forEach(tagName => { switch (tagName) {
    case "fw-modal-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalContent);
      }
      break;
  } });
}
defineCustomElement();

export { ModalContent as M, defineCustomElement as d };
