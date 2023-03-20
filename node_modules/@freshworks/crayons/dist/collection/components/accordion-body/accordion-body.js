import { Component, Prop, h } from '@stencil/core';
/**
 * @parent accordion
 */
export class AccordionBody {
  constructor() {
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
      } },
      h("slot", null)));
  }
  static get is() { return "fw-accordion-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["accordion-body.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["accordion-body.css"]
  }; }
  static get properties() { return {
    "expanded": {
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
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "expanded",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'no_bounding_box'",
        "resolved": "\"default\" | \"no_bounding_box\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'default'"
    }
  }; }
}
