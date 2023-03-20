import { Component, Element, Event, Host, Prop, State, h, Method, } from '@stencil/core';
import { throttle, hasSlot } from '../../utils';
export class Button {
  constructor() {
    /**
     *  Button type based on which actions are performed when the button is clicked.
     */
    this.type = 'button';
    /**
     * Identifier of  the theme based on which the button is styled.
     */
    this.color = 'primary';
    /**
     * Size of the button.
     */
    this.size = 'normal';
    /**
     * Disables the button on the interface. Default value is false.
     */
    this.disabled = false;
    /**
     * Loading state for the button, Default value is false.
     */
    this.loading = false;
    /**
     * Caret indicator for the button, Default value is false.
     */
    this.showCaretIcon = false;
    /**
     *  Accepts the id of the fw-modal component to open it on click.
     */
    this.modalTriggerId = '';
    /**
     * Accepts the id of the fw-file-uploader component to upload the file.
     */
    this.fileUploaderId = '';
    /**
     * Sets the delay for throttle in milliseconds. Defaults to 200 milliseconds.
     */
    this.throttleDelay = 200;
    this.hasLabel = false;
    this.hasBeforeLabel = false;
    this.hasAfterLabel = false;
  }
  async setFocus() {
    this.button.focus();
  }
  onFocus() {
    this.fwFocus.emit();
  }
  onBlur() {
    this.fwBlur.emit();
  }
  connectedCallback() {
    this.handleClickWithThrottle = throttle(this.handleClick, this, this.throttleDelay);
  }
  handlePreventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  handleClick(event) {
    if (this.modalTriggerId !== '') {
      this.modalTrigger();
    }
    if (this.fileUploaderId !== '') {
      this.fileSubmit();
    }
    else if (this.type === 'submit') {
      this.fakeSubmit(event);
    }
    this.fwClick.emit();
  }
  async fileSubmit() {
    const fileUploader = document.querySelector(`fw-file-uploader#${this.fileUploaderId}`);
    fileUploader === null || fileUploader === void 0 ? void 0 : fileUploader.uploadFiles();
  }
  async modalTrigger() {
    const modal = document.querySelector(`fw-modal#${this.modalTriggerId}`);
    modal === null || modal === void 0 ? void 0 : modal.open();
  }
  async fakeSubmit(event) {
    const form = this.host.closest('form');
    if (form) {
      event.preventDefault();
      const fakeSubmit = document.createElement('button');
      fakeSubmit.type = 'submit';
      fakeSubmit.style.display = 'none';
      form.appendChild(fakeSubmit);
      fakeSubmit.click();
      fakeSubmit.remove();
    }
  }
  componentWillLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    this.hasLabel = hasSlot(this.host);
    this.hasBeforeLabel = hasSlot(this.host, 'before-label');
    this.hasAfterLabel = hasSlot(this.host, 'after-label');
  }
  render() {
    return (h(Host, { onClick: (e) => {
        if (this.disabled) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
      } },
      h("button", { type: this.type, class: `
            fw-btn fw-btn--${this.color.toLowerCase()}
            fw-btn--${this.size.toLowerCase()}
            ${this.loading ? 'fw-btn--loading' : ''}
            ${this.hasLabel ? 'fw-btn--has-label' : ''}
            ${this.hasBeforeLabel ? 'fw-btn--has-before' : ''}
            ${this.hasAfterLabel ? 'fw-btn--has-after' : ''}
            ${this.showCaretIcon ? 'fw-btn--caret' : ''}
          `, onClick: this.disabled || this.loading
          ? this.handlePreventDefault
          : this.handleClickWithThrottle, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (button) => (this.button = button), "aria-disabled": this.disabled, disabled: this.disabled },
        h("span", { class: 'fw-btn--before' },
          h("slot", { onSlotchange: () => this.handleSlotChange(), name: 'before-label' })),
        h("span", { class: 'fw-btn--label' },
          h("slot", { onSlotchange: () => this.handleSlotChange() })),
        h("span", { class: 'fw-btn--after' },
          h("slot", { onSlotchange: () => this.handleSlotChange(), name: 'after-label' })),
        this.loading ? h("fw-spinner", { class: 'fw-btn--loader' }) : '',
        this.showCaretIcon ? (h("fw-icon", { name: 'chevron-down', library: 'system' })) : (''))));
  }
  static get is() { return "fw-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit'",
        "resolved": "\"button\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button type based on which actions are performed when the button is clicked."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'danger' | 'link' | 'text'",
        "resolved": "\"danger\" | \"link\" | \"primary\" | \"secondary\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Identifier of  the theme based on which the button is styled."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'normal' | 'small' | 'icon' | 'icon-small'",
        "resolved": "\"icon\" | \"icon-small\" | \"normal\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the button."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'normal'"
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
        "text": "Disables the button on the interface. Default value is false."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "loading": {
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
        "text": "Loading state for the button, Default value is false."
      },
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "false"
    },
    "showCaretIcon": {
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
        "text": "Caret indicator for the button, Default value is false."
      },
      "attribute": "show-caret-icon",
      "reflect": false,
      "defaultValue": "false"
    },
    "modalTriggerId": {
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
        "text": "Accepts the id of the fw-modal component to open it on click."
      },
      "attribute": "modal-trigger-id",
      "reflect": false,
      "defaultValue": "''"
    },
    "fileUploaderId": {
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
        "text": "Accepts the id of the fw-file-uploader component to upload the file."
      },
      "attribute": "file-uploader-id",
      "reflect": false,
      "defaultValue": "''"
    },
    "throttleDelay": {
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
        "text": "Sets the delay for throttle in milliseconds. Defaults to 200 milliseconds."
      },
      "attribute": "throttle-delay",
      "reflect": false,
      "defaultValue": "200"
    }
  }; }
  static get states() { return {
    "hasLabel": {},
    "hasBeforeLabel": {},
    "hasAfterLabel": {}
  }; }
  static get events() { return [{
      "method": "fwClick",
      "name": "fwClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the button is clicked."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
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
        "text": "Triggered when the button comes into focus."
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
        "text": "Triggered when the button loses focus."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
