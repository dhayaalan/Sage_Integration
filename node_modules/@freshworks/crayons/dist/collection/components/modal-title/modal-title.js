import { Component, Element, Prop, h } from '@stencil/core';
import { hasSlot } from '../../utils';
/**
 * @parent modal
 */
export class ModalTitle {
  constructor() {
    /**
     * The icon to be displayed with the title
     */
    this.icon = '';
    /**
     * Set to true if we want to render slot instead of default footer
     */
    this.custom = null;
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.el);
    }
  }
  /**
   * renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon() {
    return (h("span", { class: 'modal-title-icon' },
      h("fw-icon", { name: this.icon, size: 16 })));
  }
  /**
   * renders slot content when custom attribute is passed, else displays the default
   * icon, title and description with close button in the header.
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'modal-header-container' },
      h("div", { class: 'modal-header' }, this.custom ? (h("slot", null)) : (h("div", { class: 'modal-header-body' },
        h("div", { class: 'modal-title' },
          this.icon !== '' ? this.renderIcon() : null,
          h("label", { class: 'title-label' }, this.titleText)),
        this.description && (h("label", { class: 'description' }, this.description)))))));
  }
  static get is() { return "fw-modal-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-title.css"]
  }; }
  static get properties() { return {
    "titleText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The title text to be displayed on the modal"
      },
      "attribute": "title-text",
      "reflect": false
    },
    "description": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The title text to be displayed on the modal"
      },
      "attribute": "description",
      "reflect": false
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The icon to be displayed with the title"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get elementRef() { return "el"; }
}
