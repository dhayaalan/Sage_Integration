import { Component, h } from '@stencil/core';
/**
 * @parent modal
 */
export class ModalContent {
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'content' },
      h("slot", null)));
  }
  static get is() { return "fw-modal-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-content.css"]
  }; }
}
