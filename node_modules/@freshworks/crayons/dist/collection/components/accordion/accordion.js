import { Component, Element, Event, Prop, Method, h, Watch, } from '@stencil/core';
export class Accordion {
  constructor() {
    /**
     * The type of accordion to be displayed.
     * default => Accordion with all borders
     * no_bounding_box => Accordion with top and bottom borders only
     */
    this.type = 'default';
    /**
     * To manage accordion expanded or collapsed state
     */
    this.expanded = false;
    this.toggleState = () => {
      this.expanded = !this.expanded;
      this.updateState();
      this.fwAccordionToggle.emit({ expanded: this.expanded });
    };
  }
  /**
   * Method available from the component to toggle expanded or collapsed state of accordion
   * @returns promise that resolves to true
   */
  async toggle() {
    this.toggleState();
    return true;
  }
  watchExpanded(newValue) {
    this.expanded = newValue;
    this.updateState();
  }
  updateState() {
    this.accordionTitle.expanded = this.expanded;
    this.accordionBody.expanded = this.expanded;
  }
  componentWillLoad() {
    this.accordionTitle = this.el.querySelector('fw-accordion-title');
    this.accordionBody = this.el.querySelector('fw-accordion-body');
    this.accordionTitle.type = this.type;
    this.accordionBody.type = this.type;
    this.accordionTitle.toggleState = this.toggleState.bind(this);
    this.updateState();
  }
  render() {
    return (h("div", { class: {
        'accordion': true,
        'no-bounding-box': this.type === 'no_bounding_box',
      } },
      h("slot", null)));
  }
  static get is() { return "fw-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["accordion.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'no_bounding_box'",
        "resolved": "\"default\" | \"no_bounding_box\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of accordion to be displayed.\ndefault => Accordion with all borders\nno_bounding_box => Accordion with top and bottom borders only"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "expanded": {
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
        "text": "To manage accordion expanded or collapsed state"
      },
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "fwAccordionToggle",
      "name": "fwAccordionToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the accordion is expanded or collapsed"
      },
      "complexType": {
        "original": "AccordionToggleEvent",
        "resolved": "AccordionToggleEvent",
        "references": {
          "AccordionToggleEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get methods() { return {
    "toggle": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Method available from the component to toggle expanded or collapsed state of accordion",
        "tags": [{
            "name": "returns",
            "text": "promise that resolves to true"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "expanded",
      "methodName": "watchExpanded"
    }]; }
}
