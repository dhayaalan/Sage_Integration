import { Component, Element, Event, Host, Prop, State, Watch, h, } from '@stencil/core';
import { handleKeyDown } from '../../utils';
const iconColorMap = {
  error: '#e43538',
  warning: '#f48928',
  info: '#2c5cc5',
  success: '#00a886',
};
/**
 * @parent toast
 */
export class ToastMessage {
  constructor() {
    /**
     * visibility prop of toast message
     */
    this.open = false;
    /**
     * To indicate toast close timeout
     */
    this.isTimedOut = false;
    /**
     * To add close animation class to toast
     */
    this.fadeOut = false;
    /**
     * State icon size
     */
    this.iconSize = 16;
    /**
     * Type of the toast - success,failure, warning, inprogress
     */
    this.type = 'warning';
    /**
     * Time duration of the toast visibility
     */
    this.timeout = 4000;
    /**
     *  The Content of the action link
     */
    this.actionLinkText = '';
    /**
     *  won't close automatically
     */
    this.sticky = false;
  }
  openChanged(open) {
    if (open)
      this.setUpToast();
  }
  async componentWillLoad() {
    if (this.open)
      this.setUpToast();
  }
  async setUpToast() {
    this.fadeOut = false;
    this.isTimedOut = false;
    this.timerId = setTimeout(async () => {
      if (!this.sticky) {
        if (!this.pauseOnHover || (this.pauseOnHover && !this.isMouseHovered)) {
          await this.closeToast();
        }
        this.isTimedOut = true;
      }
    }, this.timeout);
  }
  async mouseHover(value = false) {
    this.isMouseHovered = value;
    if (this.isTimedOut && !this.isMouseHovered) {
      await this.closeToast();
    }
  }
  closingAnimation() {
    this.fadeOut = true;
    return new Promise((resolve) => setTimeout(() => {
      this.open = false;
      this.fwRemoveToast.emit(this.controllerEl);
      resolve();
    }, 500));
  }
  async closeToast() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    await this.closingAnimation();
  }
  disconnectedCallback() {
    this.fwRemoveToast.emit(this.controllerEl);
    if (this.timerId)
      clearTimeout(this.timerId);
  }
  render() {
    return (h(Host, { onmouseover: () => this.mouseHover(true), onmouseout: () => this.mouseHover(false), "aria-hidden": this.open ? 'false' : 'true' },
      h("div", { class: `toast ${this.type} ${this.open ? 'is-open' : ''} ${this.fadeOut ? 'fade-out' : ''}`, "aria-hidden": this.open ? 'false' : 'true' },
        h("div", { class: 'toast-container' },
          this.type === 'inprogress' ? (h("fw-spinner", { class: 'icon' })) : (h("fw-icon", { class: 'icon', size: this.iconSize, name: this.type, color: iconColorMap[this.type] })),
          h("div", { class: 'content' },
            h("slot", null),
            this.content,
            this.actionLinkText.length > 0 ? (h("div", { class: 'action-link', role: 'button', tabindex: '0', onClick: () => this.fwLinkClick.emit(), onKeyDown: handleKeyDown(() => this.fwLinkClick.emit()) }, this.actionLinkText)) : ('')),
          h("fw-icon", { size: 10, name: 'cross', class: 'remove', color: '#183247', onClick: () => this.closeToast(), library: 'system' })))));
  }
  static get is() { return "fw-toast-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toast-message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toast-message.css"]
  }; }
  static get properties() { return {
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
        "text": "visibility prop of toast message"
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'success' | 'error' | 'warning' | 'inprogress'",
        "resolved": "\"error\" | \"inprogress\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of the toast - success,failure, warning, inprogress"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'warning'"
    },
    "timeout": {
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
        "text": "Time duration of the toast visibility"
      },
      "attribute": "timeout",
      "reflect": false,
      "defaultValue": "4000"
    },
    "content": {
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
        "text": "The content to be displayed in toast"
      },
      "attribute": "content",
      "reflect": false
    },
    "actionLinkText": {
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
        "text": "The Content of the action link"
      },
      "attribute": "action-link-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "sticky": {
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
        "text": "won't close automatically"
      },
      "attribute": "sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "pauseOnHover": {
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
        "text": "Pause the toast from hiding on mouse hover"
      },
      "attribute": "pause-on-hover",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isMouseHovered": {},
    "isTimedOut": {},
    "timerId": {},
    "fadeOut": {},
    "iconSize": {}
  }; }
  static get events() { return [{
      "method": "fwLinkClick",
      "name": "fwLinkClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the action link clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "fwRemoveToast",
      "name": "fwRemoveToast",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered on closing the toast message.\nThis event gets used by the parent container to remove the toast message from itself"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "controllerEl"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "openChanged"
    }]; }
}
