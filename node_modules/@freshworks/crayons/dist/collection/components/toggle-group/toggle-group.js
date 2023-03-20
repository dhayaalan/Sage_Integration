import { Component, Element, Event, Host, Method, Prop, Watch, Listen, h, State, } from '@stencil/core';
import { updateSelectedValues, doKeyDownOperations, updateChildSelectionState, validateAndParseInputSelectedValues, } from '../../utils/list-utils';
/**
 * @parent toggle
 */
export class ToggleGroup {
  constructor() {
    this.selectedIndex = -1;
    this.isInputFormatArray = false;
    /**
     * Boolean value to allow multiple selection or single child selection
     */
    this.multiple = false;
    /**
     * Selected items to be shown - stored in array format - if property "multiple" is set to false, this will always be a single value array
     */
    this.value = null;
    /**
     * Internal state of array items store the selected items
     */
    this.arrSelectedItems = null;
    /**
     * Label for the component, that can be used by screen readers.
     */
    this.label = '';
    /**
     * Name of the component, saved as part of form data.
     */
    this.name = '';
  }
  // public method to set selected values
  async setSelectedValues(values) {
    this.value = values;
  }
  watchSelectedValuesChangeHandler() {
    this.parseSelectedItems();
    this.updateSelection();
  }
  keyupHandler(event) {
    const arrChildren = this.arrChildElements;
    if (!arrChildren || arrChildren.length === 0) {
      return;
    }
    const objResponse = doKeyDownOperations(event.code, this.arrChildElements, this.selectedIndex, this.multiple);
    this.selectedIndex = objResponse.index;
    if (objResponse.changeSelection) {
      const arrUpdatedSelectionItems = updateSelectedValues(arrChildren, this.selectedIndex, objResponse.selected, this.multiple, this.arrSelectedItems);
      this.arrSelectedItems = [...arrUpdatedSelectionItems];
      this.dispatchSelectionChangeEvent();
    }
  }
  toggleChangeHandler(event) {
    const objDetail = event.detail;
    this.selectedIndex = objDetail.index;
    const arrUpdatedSelectionItems = updateSelectedValues(this.arrChildElements, this.selectedIndex, objDetail.selected, this.multiple, this.arrSelectedItems);
    this.arrSelectedItems = arrUpdatedSelectionItems;
    this.dispatchSelectionChangeEvent();
  }
  componentWillLoad() {
    this.parseSelectedItems();
  }
  componentDidLoad() {
    const elHost = this.host;
    this.arrChildElements = elHost.children;
    this.updateSelection(true);
  }
  dispatchSelectionChangeEvent() {
    const strDispatchSelectedValues = this.arrSelectedItems.toString();
    if (strDispatchSelectedValues !== this.value) {
      this.value = strDispatchSelectedValues;
      this.fwChange.emit({
        value: !this.isInputFormatArray
          ? strDispatchSelectedValues
          : [...this.arrSelectedItems],
      });
    }
  }
  parseSelectedItems() {
    const objResponse = validateAndParseInputSelectedValues(this.value);
    if (this.value !== objResponse.strSelectedValues) {
      this.value = objResponse.strSelectedValues;
    }
    this.isInputFormatArray = objResponse.isArray;
    this.arrSelectedItems = objResponse.arrSelectedValues;
  }
  updateSelection(boolSetRadioCheckboxType = false) {
    const intUpdatedIndex = updateChildSelectionState(this.arrChildElements, this.multiple, this.arrSelectedItems, boolSetRadioCheckboxType);
    // for the first time when the component is loaded and the selectedIndex is not set
    if (intUpdatedIndex !== -1 && this.selectedIndex === -1) {
      this.selectedIndex = intUpdatedIndex;
    }
  }
  render() {
    return (h(Host, { "aria-label": this.label },
      h("slot", null)));
  }
  static get is() { return "fw-toggle-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggle-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle-group.css"]
  }; }
  static get properties() { return {
    "multiple": {
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
        "text": "Boolean value to allow multiple selection or single child selection"
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selected items to be shown - stored in array format - if property \"multiple\" is set to false, this will always be a single value array"
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "null"
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
    }
  }; }
  static get states() { return {
    "arrSelectedItems": {}
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an option in the Toggle Group is selected or deselected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setSelectedValues": {
      "complexType": {
        "signature": "(values: string | string[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "watchSelectedValuesChangeHandler"
    }]; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "keyupHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "fwToggled",
      "method": "toggleChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
