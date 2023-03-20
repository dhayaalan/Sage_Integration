import { Component, Element, Host, Prop, Watch, Method, h, Listen, Event, State, } from '@stencil/core';
import { findCheckedOption, renderHiddenField, watchForOptions, hasSlot, } from '../../utils';
/**
 * @parent radio
 */
export class RadioGroup {
  constructor() {
    this.selectedIndex = 0;
    /**
     * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to false.
     */
    this.allowEmpty = false;
    /**
     * Label for the component
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
    /**
     * Indicates the direction of the radio buttons alignment, defaults to vertical alignment.
     */
    this.orientation = 'column';
    /**
     * Specifies the input radio group as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
     */
    this.required = false;
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
    /**
     * Theme based on which the radio group is styled.
     */
    this.state = 'normal';
    this.hasHintTextSlot = false;
    this.hasWarningTextSlot = false;
    this.hasErrorTextSlot = false;
    this.onSelect = (ev) => {
      const selectedRadio = ev.target;
      if (selectedRadio) {
        this.value = selectedRadio.value;
      }
    };
    this.onDeselect = async (ev) => {
      const selectedRadio = ev.target;
      if (this.allowEmpty && selectedRadio.value === this.value) {
        this.value = undefined;
      }
      await this.updateRadios();
    };
  }
  async valueChanged() {
    await this.updateRadios();
  }
  handleKeydown(ev) {
    if (ev.code === 'ArrowDown' ||
      ev.code === 'ArrowRight' ||
      ev.code === 'ArrowLeft' ||
      ev.code === 'ArrowUp' ||
      ev.code === 'Space') {
      ev.preventDefault();
    }
  }
  handleKeyup(event) {
    const radios = this.radios;
    const supportedKeyStrokes = [
      'ArrowDown',
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'Space',
    ];
    const previousSelected = this.selectedIndex;
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowRight':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex = ++this.selectedIndex % radios.length;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        radios[previousSelected].setAttribute('tabindex', '-1');
        radios[previousSelected].checked = false;
        // set currently selectedIndex using roving tabindex technique
        this.selectedIndex =
          this.selectedIndex === 0 ? radios.length - 1 : --this.selectedIndex;
        radios[this.selectedIndex].setAttribute('tabindex', '0');
        radios[this.selectedIndex].checked = true;
        radios[this.selectedIndex].focus();
        this.value = radios[this.selectedIndex].value;
        break;
      case 'Space':
        /**
         * This case is executed only when none of the radios are checked
         * and we first tab into the radio group.
         */
        radios[0].checked = true;
        radios[0].focus();
        this.value = radios[0].value;
        break;
      default:
        break;
    }
    if (supportedKeyStrokes.includes(event.code)) {
      this.fwChange.emit({
        event,
        name: this.name,
        value: this.value,
      });
    }
  }
  async connectedCallback() {
    const el = this.host;
    this.radios = Array.from(this.host.querySelectorAll('fw-radio')).filter((radio) => !radio.disabled);
    if (this.value === undefined) {
      const radio = findCheckedOption(el, 'fw-radio');
      if (radio !== undefined) {
        await radio.componentOnReady();
        if (this.value === undefined) {
          this.value = radio.value;
        }
      }
    }
    this.mutationO = watchForOptions(el, 'fw-radio', async (newOption) => {
      if (newOption !== undefined) {
        newOption
          .componentOnReady()
          .then(() => {
          this.value = newOption.value;
        })
          .catch();
      }
      else {
        await this.updateRadios();
      }
    });
  }
  componentDidLoad() {
    const fieldControl = this.host.querySelector('.field-input');
    if (fieldControl) {
      fieldControl.style.display = 'flex';
      fieldControl.style.flexDirection = this.orientation;
    }
    const slottedElements = this.host.querySelectorAll('fw-radio');
    slottedElements.forEach((radio, index) => {
      if (this.orientation === 'column') {
        radio.classList.add('fw-radio-group__radio');
        radio.classList.toggle('fw-radio-group__radio--last', index === slottedElements.length - 1);
      }
    });
  }
  componentWillLoad() {
    this.checkSlotContent();
  }
  checkSlotContent() {
    this.hasHintTextSlot = hasSlot(this.host, 'hint-text');
    this.hasWarningTextSlot = hasSlot(this.host, 'warning-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  async updateRadios() {
    /**
     * Make sure we get all radios first
     * so values are up to date prior
     * to caching the radio group value
     */
    const radios = await this.radios;
    const { value } = this;
    let hasChecked = false;
    radios.forEach((radio, index) => {
      if (!hasChecked && radio.value === value) {
        // correct value for this radio
        // but this radio isn't checked yet
        // and we haven't found a checked yet
        hasChecked = true;
        radio.checked = true;
        radio.setAttribute('tabindex', '0');
        this.selectedIndex = index;
      }
      else {
        // this radio doesn't have the correct value
        // or the radio group has been already checked
        radio.setAttribute('tabindex', '-1');
        radio.checked = false;
      }
    });
    // Reset value if
    if (!hasChecked) {
      radios.length !== 0 && radios[0].setAttribute('tabindex', '0');
      this.selectedIndex = 0;
      this.value = undefined;
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
  /**
   * Sets focus on a specific `fw-radio`.
   */
  async setFocus() {
    var _a, _b;
    const radios = this.radios;
    (_b = (_a = radios[0]) === null || _a === void 0 ? void 0 : _a.setFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  render() {
    const { host, name, value } = this;
    const hasLabel = !!this.label;
    const hasHintText = this.hintText ? true : this.hasHintTextSlot;
    const hasErrorText = this.errorText ? true : this.hasErrorTextSlot;
    const hasWarningText = this.warningText ? true : this.hasWarningTextSlot;
    const showHintText = this.state === 'normal' ? true : false;
    const showErrorText = this.state === 'error' ? true : false;
    const showWarningText = this.state === 'warning' ? true : false;
    const labelId = this.label && this.name
      ? `${this.label}-${this.name}`
      : this.label
        ? this.label
        : this.name && this.name;
    const hintTextId = `hint-${this.name}`;
    const warningTextId = `warning-${this.name}`;
    const errorTextId = `error-${this.name}`;
    renderHiddenField(host, name, value);
    return (h(Host, { role: 'radiogroup', "aria-labelledby": labelId, onFwSelect: this.onSelect, onFwDeselect: this.onDeselect, "aria-describedby": this.getAriaDescribedBy() },
      h("div", { class: {
          'field-control': true,
        } },
        hasLabel && (h("label", { id: labelId, class: {
            'field-control-label': true,
            'required': this.required,
          }, "aria-hidden": hasLabel ? 'false' : 'true' }, this.label)),
        h("div", { class: 'field-input' },
          h("slot", null)),
        showHintText && hasHintText && (h("div", { id: hintTextId, class: 'field-control-hint-text', "aria-hidden": hasHintText ? 'false' : 'true' },
          h("slot", { name: 'hint-text' }, this.hintText))),
        showErrorText && hasErrorText && (h("div", { id: errorTextId, class: 'field-control-error-text', "aria-hidden": hasErrorText ? 'false' : 'true' },
          h("slot", { name: 'error-text' }, this.errorText))),
        showWarningText && hasWarningText && (h("div", { id: warningTextId, class: 'field-control-warning-text', "aria-hidden": hasWarningText ? 'false' : 'true' },
          h("slot", { name: 'warning-text' }, this.warningText))))));
  }
  static get is() { return "fw-radio-group"; }
  static get originalStyleUrls() { return {
    "$": ["radio-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["radio-group.css"]
  }; }
  static get properties() { return {
    "allowEmpty": {
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
        "text": "If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "allow-empty",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Label for the component"
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
    "orientation": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'row' | 'column'",
        "resolved": "\"column\" | \"row\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Indicates the direction of the radio buttons alignment, defaults to vertical alignment."
      },
      "attribute": "orientation",
      "reflect": false,
      "defaultValue": "'column'"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any | null",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Default option that is selected when the radio group is displayed on the interface. Must be a valid value corresponding to the fw-radio components used in the Radio Group."
      },
      "attribute": "value",
      "reflect": false
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
        "text": "Specifies the input radio group as a mandatory field and displays an asterisk next to the label. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Hint text displayed below the radio group."
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
        "text": "Theme based on which the radio group is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
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
        "text": "Triggered when an option in the Radio Group is selected or deselected."
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
      "propName": "value",
      "methodName": "valueChanged"
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
