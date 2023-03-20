import { Component, h, Prop } from '@stencil/core';
export class CustomCellAnchor {
  constructor() {
    this.href = '';
    this.text = '';
    this.target = '_self';
  }
  render() {
    return (h("a", { class: 'anchor', href: this.href, target: this.target }, this.text));
  }
  static get is() { return "fw-custom-cell-anchor"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["custom-cell-anchor.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["custom-cell-anchor.css"]
  }; }
  static get properties() { return {
    "href": {
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
        "text": ""
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "''"
    },
    "text": {
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
        "text": ""
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "''"
    },
    "target": {
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
        "text": ""
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    }
  }; }
}
