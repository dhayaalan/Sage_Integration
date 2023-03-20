import { Component, Event, Element, Prop, Watch, h, Host, Listen, } from '@stencil/core';
import { addRTL } from '../../utils';
export class Toggle {
  constructor() {
    /**
     * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Size of the input control.
     */
    this.size = 'medium';
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
    /**
     * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Specifies whether to show the check and cancel icons on toggle button. If the attribute’s value is undefined, the value is set to true.
     */
    this.showIcon = true;
    /**
     * Label for the component, that can be used by screen readers.
     */
    this.label = '';
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
      }
    };
  }
  handleKeyUp(ev) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      this.toggle();
    }
  }
  handleKeyDown(ev) {
    if (ev.code === 'Space' || ev.code === 'Enter') {
      ev.preventDefault();
    }
  }
  watchHandler(newValue) {
    this.fwChange.emit({ checked: newValue });
  }
  connectedCallback() {
    addRTL(this.host);
  }
  render() {
    const toggleSize = ['small', 'medium', 'large'].includes(this.size)
      ? this.size
      : 'medium';
    return (h(Host, { onClick: () => this.toggle(), tabindex: '0', role: 'switch', "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', "aria-label": this.label },
      h("div", { class: {
          'toggle-switch': true,
          [toggleSize]: true,
        } },
        h("input", { name: this.name, type: 'checkbox', disabled: this.disabled, checked: this.checked, class: 'checkboxClass' }),
        h("span", { class: {
            slider: true,
            [toggleSize]: true,
          } }, h("span", { class: 'before' }, this.showIcon && (h("fw-icon", { color: this.checked ? '#2c5cc5' : '#647a8e', name: this.checked ? 'check' : 'cross', class: { checked: this.checked }, library: 'system' })))))));
  }
  static get is() { return "fw-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggle.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle.css"]
  }; }
  static get properties() { return {
    "checked": {
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
        "text": "Sets the selected state as the default state. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "checked",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the input control."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
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
        "text": "Name of the component, saved as part of the form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "disabled": {
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
        "text": "Specifies whether to disable the control on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "showIcon": {
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
        "text": "Specifies whether to show the check and cancel icons on toggle button. If the attribute\u2019s value is undefined, the value is set to true."
      },
      "attribute": "show-icon",
      "reflect": false,
      "defaultValue": "true"
    },
    "label": {
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
        "text": "Label for the component, that can be used by screen readers."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the input control is selected or deselected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "handleKeyUp",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
