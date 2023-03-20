import { Component, Element, Prop, h } from '@stencil/core';
export class Pill {
  componentWillLoad() {
    this.handleSlotChange();
  }
  getPillClass(color) {
    return color ? `pill pill--${color.toLowerCase()}` : 'pill';
  }
  handleSlotChange() {
    this.hasIcon = !!this.el.querySelector('[slot="icon"');
  }
  render() {
    return (h("span", { class: this.getPillClass(this.color) },
      this.hasIcon && (h("div", { class: 'pill-icon' },
        h("slot", { name: 'icon' }))),
      h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  static get is() { return "fw-pill"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["pill.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pill.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'blue' | 'red' | 'green' | 'yellow' | 'grey'",
        "resolved": "\"blue\" | \"green\" | \"grey\" | \"red\" | \"yellow\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the pill is styled."
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
