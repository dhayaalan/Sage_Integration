import { Component, Element, Event, Host, Prop, Watch, h, Listen, Method, State, } from '@stencil/core';
import { renderHiddenField, hasSlot } from '../../utils';
export class Checkbox {
  constructor() {
    /**
     * Sets the state of the check box to selected. If the attribute’s value is undefined, the value is set to false.
     */
    this.checked = false;
    /**
     * Disables the check box on the interface. If the attribute’s value is undefined, the value is set to false.
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
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Identifier corresponding to the component, that is saved when the form data is saved.
     */
    this.value = '';
    /**
     * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
    /**
     * Theme based on which the checkbox is styled.
     */
    this.state = 'normal';
    /**
  
    /**
     * Hint text displayed below the radio group.
     */
    this.hintText = '';
    /**
     * Warning text displayed below the radio group.
     */
    this.warningText = '';
    /**
     * Error text displayed below the radio group.
     */
    this.errorText = '';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.onFocus = () => {
      this.fwFocus.emit();
    };
    this.onBlur = (e) => {
      this.fwBlur.emit({
        event: e,
        name: this.name,
      });
    };
    this.toggle = (e) => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.fwChange.emit({
          event: e,
          value: this.value,
          name: this.name,
          meta: { checked: this.checked },
        });
      }
    };
  }
  componentDidLoad() {
    this.checkbox.checked = this.checked;
    this.checkbox.disabled = this.disabled;
  }
  checkChanged(isChecked) {
    this.checkbox.checked = isChecked;
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  /**
   * Sets focus on a `fw-checkbox`.
   */
  async setFocus() {
    var _a;
    (_a = this.host) === null || _a === void 0 ? void 0 : _a.focus();
  }
  disabledChanged(isDisabled) {
    this.checkbox.disabled = isDisabled;
  }
  handleKeydown(ev) {
    if (ev.code === 'Space') {
      ev.preventDefault();
    }
  }
  handleKeyup(ev) {
    if (ev.code === 'Space') {
      this.toggle(ev);
    }
  }
  getAriaDescribedBy() {
    if (this.state === 'normal')
      return `hint-${this.name}`;
    else if (this.state === 'error')
      return `error-${this.name}`;
    else if (this.state === 'warning')
      return `warning-${this.name}`;
    return null;
  }
  render() {
    const { host, name, value } = this;
    if (this.checked) {
      renderHiddenField(host, name, value);
    }
    const hasHintText = this.hintText ? true : this.hasHintTextSlot;
    const hasErrorText = this.errorText ? true : this.hasErrorTextSlot;
    const hasWarningText = this.warningText ? true : this.hasWarningTextSlot;
    const showHintText = this.state === 'normal' ? true : false;
    const showErrorText = this.state === 'error' ? true : false;
    const showWarningText = this.state === 'warning' ? true : false;
    const hintTextId = `hint-${this.name}`;
    const warningTextId = `warning-${this.name}`;
    const errorTextId = `error-${this.name}`;
    return (h(Host, { role: 'checkbox', tabIndex: '0', "aria-disabled": this.disabled ? 'true' : 'false', "aria-checked": this.checked ? 'true' : 'false', "aria-labelledby": 'label', "aria-describedby": `description ${this.getAriaDescribedBy()}`, onClick: this.toggle, onFocus: this.onFocus, onBlur: this.onBlur, "aria-invalid": this.state === 'error' },
      h("div", { class: { 'checkbox-container': true, 'disabled': this.disabled } },
        h("input", { type: 'checkbox', ref: (el) => (this.checkbox = el), required: this.required, name: this.name, id: this.name }),
        h("label", { class: { error: this.state === 'error' } },
          h("span", { id: 'label', class: {
              'with-description': this.description !== '',
              'required': this.required,
            } },
            h("slot", null)),
          this.description !== '' || this.label !== '' ? (h("div", { id: 'description' }, this.description ? this.description : this.label)) : (''),
          this.checked && (h("span", { class: 'after' },
            h("fw-icon", { name: 'check', color: this.disabled ? '#92A2B1' : '#ffffff', size: 8 }))))),
      showHintText && hasHintText && (h("div", { id: hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' },
        h("slot", { name: 'hint-text' }, this.hintText))),
      showErrorText && hasErrorText && (h("div", { id: errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' },
        h("slot", { name: 'error-text' }, this.errorText))),
      showWarningText && hasWarningText && (h("div", { id: warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' },
        h("slot", { name: 'warning-text' }, this.warningText)))));
  }
  static get is() { return "fw-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["checkbox.css"]
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
        "text": "Sets the state of the check box to selected. If the attribute\u2019s value is undefined, the value is set to false."
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
        "text": "Disables the check box on the interface. If the attribute\u2019s value is undefined, the value is set to false."
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
    "required": {
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
        "text": "Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'warning' | 'error'",
        "resolved": "\"error\" | \"normal\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the checkbox is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "hintText": {
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
        "text": "\n/**\n  Hint text displayed below the radio group."
      },
      "attribute": "hint-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "warningText": {
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
        "text": "Warning text displayed below the radio group."
      },
      "attribute": "warning-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "errorText": {
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
        "text": "Error text displayed below the radio group."
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "hasHintTextSlot": {},
    "hasWarningTextSlot": {},
    "hasErrorTextSlot": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the checkbox state is modified."
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
        "text": "Triggered when the check box comes into focus."
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
        "text": "Triggered when the check box loses focus."
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
        "text": "Sets focus on a `fw-checkbox`.",
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
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeydown",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "handleKeyup",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
