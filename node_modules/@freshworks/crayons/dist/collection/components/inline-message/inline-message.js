import { Component, Prop, h, Host, Watch, Element, Method, Event, } from '@stencil/core';
const iconMap = {
  error: 'alert',
  warning: 'info',
  info: 'info',
  success: 'success',
};
const iconColorMap = {
  error: '#e43538',
  warning: '#c7502f',
  info: '#264966',
  success: '#00795b',
};
export class InlineMessage {
  constructor() {
    /**
     * Makes the inline message closable.
     */
    this.closable = true;
    /**
     * The type of inline message to be displayed. Defaults to info.
     */
    this.type = 'info';
    /**
     * The duration in milliseconds for which inline message will be shown.
     */
    this.duration = Infinity;
    /**
     * Indicates whether the inline message is open or not.
     */
    this.open = true;
  }
  startAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
    }
  }
  handleOpen() {
    if (this.open) {
      this.host.style.display = 'flex';
      this.fwShow.emit();
      if (this.duration < Infinity) {
        this.startAutoHide();
      }
    }
    else {
      clearTimeout(this.autoHideTimeout);
      this.host.style.display = 'none';
      this.fwHide.emit();
    }
  }
  handleDurationChange() {
    this.startAutoHide();
  }
  async show() {
    if (this.open) {
      return;
    }
    this.open = true;
  }
  async hide() {
    if (!this.open) {
      return;
    }
    this.open = false;
  }
  connectedCallback() {
    this.host.style.display = this.open ? 'flex' : 'none';
  }
  disconnectedCallback() {
    clearTimeout(this.autoHideTimeout);
  }
  handleKeyUp(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.hide();
    }
  }
  handleClose() {
    this.hide();
  }
  render() {
    return (h(Host, { role: 'alert', "aria-hidden": this.open ? 'false' : 'true' },
      h("div", { class: 'alert ' + 'alert--' + this.type },
        h("span", { class: 'alert__icon' },
          h("fw-icon", { size: 16, name: iconMap[this.type], color: iconColorMap[this.type] })),
        h("span", { class: 'alert__message' },
          h("slot", null)),
        this.closable && (h("span", { class: 'alert__close', role: 'button', tabindex: '0', onKeyUp: (e) => this.handleKeyUp(e), onClick: () => this.handleClose() },
          h("fw-icon", { name: 'cross', color: '#12344d', size: 8, library: 'system' }))))));
  }
  static get is() { return "fw-inline-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["inline-message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["inline-message.css"]
  }; }
  static get properties() { return {
    "closable": {
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
        "text": "Makes the inline message closable."
      },
      "attribute": "closable",
      "reflect": false,
      "defaultValue": "true"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'success' | 'warning' | 'info' | 'error'",
        "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of inline message to be displayed. Defaults to info."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'info'"
    },
    "duration": {
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
        "text": "The duration in milliseconds for which inline message will be shown."
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "Infinity"
    },
    "open": {
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
        "text": "Indicates whether the inline message is open or not."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "fwShow",
      "name": "fwShow",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when inline message is shown."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwHide",
      "name": "fwHide",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when inline message is hidden."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
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
        "text": "",
        "tags": []
      }
    },
    "hide": {
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "handleOpen"
    }, {
      "propName": "duration",
      "methodName": "handleDurationChange"
    }]; }
}
