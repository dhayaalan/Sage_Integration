import { Component, Prop, h, Host } from '@stencil/core';
export class Spinner {
  constructor() {
    /**
     * Size of the loader.
     */
    this.size = 'default';
    /**
     * Color in which the loader is displayed, specified as a standard CSS color.
     */
    this.color = '';
    this.sizeMap = {
      micro: 8,
      small: 12,
      default: 16,
      medium: 24,
      large: 32,
    };
  }
  getSize() {
    return this.sizeMap[this.size] || 16;
  }
  render() {
    const diameter = this.getSize();
    return (h(Host, null,
      h("svg", { class: `spinner ${this.size}`, style: {
          'width': `${diameter}px`,
          'height': `${diameter}px`,
          '--fw-spinner-color': `${this.color}`,
        }, viewBox: `0 0 50 50` },
        h("circle", { class: 'path', cx: '25', cy: '25', r: '18', fill: 'none', "stroke-width": '8' }))));
  }
  static get is() { return "fw-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["spinner.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["spinner.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'micro' | 'small' | 'medium' | 'large' | 'default'",
        "resolved": "\"default\" | \"large\" | \"medium\" | \"micro\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the loader."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "color": {
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
        "text": "Color in which the loader is displayed, specified as a standard CSS color."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
