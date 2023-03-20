import { Component, Element, Prop, h } from '@stencil/core';
/**
 * @parent menu
 */
export class MenuItem {
  constructor() {
    /**
     * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
     */
    this.selected = false;
    /**
     * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
     */
    this.selectable = false;
  }
  toggleSelect() {
    this.selected = !this.selected;
  }
  render() {
    return (h("div", { class: { 'menu-item': true, 'selected': this.selected }, role: 'menuitem', tabIndex: -1, onMouseDown: () => {
        this.selectable && this.toggleSelect();
      } },
      h("span", { class: 'menu-item__prefix' },
        h("slot", { name: 'prefix' })),
      h("span", { class: 'menu-item__label' },
        h("slot", null)),
      h("span", { class: 'menu-item__suffix' },
        h("slot", { name: 'suffix' })),
      this.selectable && (h("span", { class: 'menu-item__check' },
        h("fw-icon", { name: 'check', size: 12, color: '#2C5CC5', library: 'system' })))));
  }
  static get is() { return "fw-menu-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-item.css"]
  }; }
  static get properties() { return {
    "selected": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "selectable": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "selectable",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
