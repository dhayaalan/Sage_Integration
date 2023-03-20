import { Component, h, Prop } from '@stencil/core';
export class CustomCellUser {
  constructor() {
    this.image = null;
    this.name = '';
    this.email = '';
    this.alt = '';
  }
  render() {
    return (h("div", { class: 'name-box-container' },
      h("div", { class: 'avatar' },
        h("fw-avatar", { size: 'small', image: this.image, name: this.name, alt: this.alt })),
      h("div", { class: 'name-box' },
        h("div", { class: 'name-box-text' }, this.name),
        h("div", { class: 'name-box-email' }, this.email))));
  }
  static get is() { return "fw-custom-cell-user"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["custom-cell-user.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["custom-cell-user.css"]
  }; }
  static get properties() { return {
    "image": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image",
      "reflect": false,
      "defaultValue": "null"
    },
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "email": {
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
      "attribute": "email",
      "reflect": false,
      "defaultValue": "''"
    },
    "alt": {
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
      "attribute": "alt",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
