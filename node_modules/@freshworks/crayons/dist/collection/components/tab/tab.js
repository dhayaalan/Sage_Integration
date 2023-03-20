import { Component, Host, Prop, h, Element } from '@stencil/core';
let counter = 0;
export class Tab {
  connectedCallback() {
    if (!this.tabName) {
      this.el.id = `fw-tab-${counter++}`;
    }
    else {
      this.el.id = this.tabName;
      this.el.removeAttribute('tab-name');
    }
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : 'false', "aria-selected": this.active ? 'true' : 'false', tabindex: this.disabled || !this.active ? '-1' : '0', role: 'tab' },
      h("div", { class: 'tab ' +
          (this.disabled ? 'disabled' : '') +
          (this.active ? 'active' : '') }, this.tabHeader ? this.tabHeader : h("slot", null))));
  }
  static get is() { return "fw-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tab.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tab.css"]
  }; }
  static get properties() { return {
    "tabName": {
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
        "text": "Unique name of the tab."
      },
      "attribute": "tab-name",
      "reflect": false
    },
    "tabHeader": {
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
        "text": "Header for the tab to be displayed."
      },
      "attribute": "tab-header",
      "reflect": false
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
        "text": "Disables this tab"
      },
      "attribute": "disabled",
      "reflect": true
    },
    "active": {
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
        "text": "Determines whether the tab is active."
      },
      "attribute": "active",
      "reflect": true
    },
    "panel": {
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
        "text": "The name of the tab panel which this tab controls."
      },
      "attribute": "panel",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
