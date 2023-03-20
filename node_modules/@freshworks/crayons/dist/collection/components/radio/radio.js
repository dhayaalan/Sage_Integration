import { Component, Event, Host, Prop, Watch, Method, Element, h, } from '@stencil/core';
export class Radio {
  constructor() {
    /**
     * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * Description to be displayed for the checkbox.
     */
    this.description = '';
    /**
     * @deprecated Use `description` instead.
     * Label displayed on the interface, for the check box.
     */
    this.label = '';
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Theme based on which the radio button is styled.
     */
    this.state = 'normal';
  }
  componentDidLoad() {
    this.radio.checked = this.checked;
    this.radio.disabled = this.disabled;
  }
  checkChanged(isChecked) {
    if (!this.disabled) {
      if (isChecked) {
        this.fwSelect.emit({
          value: this.value,
          checked: true,
        });
      }
      else {
        this.fwDeselect.emit({
          value: this.value,
          checked: false,
        });
      }
    }
    this.radio.checked = isChecked;
  }
  disabledChanged(isDisabled) {
    this.radio.disabled = isDisabled;
  }
  onFocus() {
    this.fwFocus.emit();
  }
  onBlur(e) {
    this.fwBlur.emit({
      event: e,
      name: this.name,
    });
  }
  toggle(e) {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
    this.fwChange.emit({
      event: e,
      name: this.name,
      value: this.checked ? this.value : undefined,
    });
  }
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a;
    (_a = this.host) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    h(Host, { onClick: (e) => this.toggle(e), role: 'radio', tabIndex: '-1', "aria-labelledby": 'label', "aria-describedby": `description`, "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', onFocus: () => this.onFocus(), onBlur: (e) => this.onBlur(e), "aria-invalid": this.state === 'error' },
      h("div", { class: 'radio-container' },
        h("input", { type: 'radio', ref: (el) => (this.radio = el), name: this.name }),
        h("label", { class: { error: this.state === 'error' } },
          h("span", { id: 'label', class: {
              'with-description': this.description !== '',
            } },
            h("slot", null)),
          this.description !== '' || this.label !== '' ? (h("div", { id: 'description' }, this.description ? this.description : this.label)) : ('')))));
  }
  static get is() { return "fw-radio"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["radio.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio.css"]
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
        "text": "Sets the state to selected. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "checked",
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
        "text": "Description to be displayed for the checkbox."
      },
      "attribute": "description",
      "reflect": false,
      "defaultValue": "''"
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
        "tags": [{
            "name": "deprecated",
            "text": "Use `description` instead.\nLabel displayed on the interface, for the check box."
          }],
        "text": ""
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "Name of the component, saved as part of form data."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'error'",
        "resolved": "\"error\" | \"normal\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the radio button is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    }
  }; }
  static get events() { return [{
      "method": "fwSelect",
      "name": "fwSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "\n/**\n  Triggered when the radio button in focus is selected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwDeselect",
      "name": "fwDeselect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the radio button in focus is cleared."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwFocus",
      "name": "fwFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the radio button comes into focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "fwBlur",
      "name": "fwBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the radio button loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the radio button is toggled."
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
        "text": "Sets focus on a specific `fw-radio`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "checked",
      "methodName": "checkChanged"
    }, {
      "propName": "disabled",
      "methodName": "disabledChanged"
    }]; }
}
