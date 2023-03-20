import { Component, Host, h, Element, Prop } from '@stencil/core';
/**
 * @parent button
 */
export class ButtonGroup {
  constructor() {
    this.label = '';
  }
  componentDidLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    if (!this.host)
      return;
    const slottedElements = this.host.querySelectorAll('fw-button');
    slottedElements.forEach((button, index) => {
      button.classList.add('fw-button-group__button');
      button.classList.toggle('fw-button-group__button--first', index === 0);
      button.classList.toggle('fw-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
      button.classList.toggle('fw-button-group__button--last', index === slottedElements.length - 1);
    });
  }
  render() {
    return (h(Host, { "aria-label": this.label },
      h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  static get is() { return "fw-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button-group.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": true,
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
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get elementRef() { return "host"; }
}
