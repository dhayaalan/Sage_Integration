import { Component, Host, Prop, h, Element } from '@stencil/core';
let counter = 0;
/**
 * @parent tab
 */
export class Panel {
  constructor() {
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
    return (h(Host, { role: 'tabpanel', "aria-hidden": this.active ? 'false' : 'true' },
      h("slot", null)));
  }
  static get is() { return "fw-tab-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tab-panel.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tab-panel.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "The panel name."
      },
      "attribute": "name",
      "reflect": true,
      "defaultValue": "''"
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true sets the panel display to block, none otherwise."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
