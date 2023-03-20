import { Component, Event, Element, Prop, Listen, Method, h, Host, } from '@stencil/core';
/**
 * @parent toggle
 */
export class ToggleGroupButton {
  constructor() {
    /**
     * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.selected = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * sets the default base class name and the rest of the class names for the other states are automatically appended to this
     */
    this.baseClassName = 'fw-card-radio';
    /**
     * sets the type of the button
     */
    this.type = 'card';
    /**
     * Enables the component to be used as a toggle button or just to be used as a normal button
     */
    this.selectable = true;
    /**
     * Enables the component to be used as a part of multi selection group
     */
    this.isCheckbox = false;
    /**
     * index attached inside the parent group component
     */
    this.index = -1;
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Label displayed as header in the card.
     */
    this.header = '';
    /**
     * Label displayed as description in the card.
     */
    this.description = '';
    /**
     * Name of the component, saved as part of the form data.
     */
    this.name = '';
  }
  /**
   * Public method exposed to set the focus for the button component - to be used for accessibility
   */
  async setFocus() {
    this.button.focus();
  }
  listenClickHandler(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.detail && event.detail > 1) {
      return;
    }
    let boolEmitEvent = true;
    let boolSelected = false;
    if (this.selectable) {
      if (this.isCheckbox) {
        boolSelected = !this.selected;
      }
      else {
        boolSelected = true;
        if (this.selected) {
          boolEmitEvent = false;
        }
      }
    }
    this.selected = boolSelected;
    if (boolEmitEvent) {
      this.fwToggled.emit({
        index: this.index,
        value: this.value,
        selected: boolSelected,
      });
    }
  }
  componentWillLoad() {
    switch (this.type) {
      case 'card':
        this.baseClassName = 'fw-toggle-card-button';
        break;
      case 'icon':
        this.baseClassName = 'fw-toggle-icon-button';
        break;
    }
  }
  getClassName() {
    const strComponentClassName = this.baseClassName;
    let strClassName = strComponentClassName;
    if (this.selectable && this.selected) {
      strClassName += ' ' + strComponentClassName + '--selected';
      if (this.isCheckbox) {
        strClassName += ' ' + strComponentClassName + '--selected--checkbox';
      }
      else {
        strClassName += ' ' + strComponentClassName + '--selected--radio';
      }
    }
    if (this.disabled) {
      strClassName += ' ' + strComponentClassName + '--disabled';
    }
    return strClassName;
  }
  render() {
    const strComponentClassName = this.baseClassName;
    const strButtonClassName = this.getClassName();
    const strBtnType = this.type;
    return (h(Host, { tabIndex: '-1' },
      strBtnType === 'card' && (h("button", { ref: (button) => (this.button = button), class: strButtonClassName, "aria-disabled": this.disabled },
        h("label", { class: `${strComponentClassName}-header` }, this.header),
        this.description && this.description !== '' && (h("p", { class: `${strComponentClassName}-description` }, this.description)),
        this.selected ? (h("span", { class: `${strComponentClassName}-tick` },
          h("fw-icon", { size: 10, name: 'check', color: '#FFFFFF', library: 'system' }))) : (''))),
      strBtnType === 'icon' && (h("button", { ref: (button) => (this.button = button), class: strButtonClassName, "aria-disabled": this.disabled },
        h("slot", { name: 'toggle-icon' }))),
      strBtnType === 'custom' && h("slot", null)));
  }
  static get is() { return "fw-toggle-group-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggle-group-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle-group-button.css"]
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
        "text": "Sets the state to selected. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
        "text": "Disables the component on the interface. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "baseClassName": {
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
        "text": "sets the default base class name and the rest of the class names for the other states are automatically appended to this"
      },
      "attribute": "base-class-name",
      "reflect": false,
      "defaultValue": "'fw-card-radio'"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'card' | 'icon' | 'custom'",
        "resolved": "\"card\" | \"custom\" | \"icon\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "sets the type of the button"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'card'"
    },
    "selectable": {
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
        "text": "Enables the component to be used as a toggle button or just to be used as a normal button"
      },
      "attribute": "selectable",
      "reflect": false,
      "defaultValue": "true"
    },
    "isCheckbox": {
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
        "text": "Enables the component to be used as a part of multi selection group"
      },
      "attribute": "is-checkbox",
      "reflect": false,
      "defaultValue": "false"
    },
    "index": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "index attached inside the parent group component"
      },
      "attribute": "index",
      "reflect": false,
      "defaultValue": "-1"
    },
    "value": {
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
        "text": "Identifier corresponding to the component, that is saved when the form data is saved."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "header": {
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
        "text": "Label displayed as header in the card."
      },
      "attribute": "header",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Label displayed as description in the card."
      },
      "attribute": "description",
      "reflect": false,
      "defaultValue": "''"
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
    }
  }; }
  static get events() { return [{
      "method": "fwToggled",
      "name": "fwToggled",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the card in focus is selected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Public method exposed to set the focus for the button component - to be used for accessibility",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "listenClickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
