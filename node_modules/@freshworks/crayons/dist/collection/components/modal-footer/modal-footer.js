import { Component, Element, Prop, h } from '@stencil/core';
import { hasSlot } from '../../utils';
import { TranslationController } from '../../global/Translation';
/**
 * @parent modal
 */
export class ModalFooter {
  constructor() {
    /**
     * The text for the submit button
     */
    // @i18n({ keyName: 'modal.ok' })
    this.submitText = '';
    /**
     * The text for the cancel button
     */
    // @i18n({ keyName: 'modal.cancel' })
    this.cancelText = '';
    /**
     * Default state of submit button
     */
    this.submitDisabled = false;
    /**
     * The color of submit button
     */
    this.submitColor = 'primary';
    /**
     * Set to true if we want to render slot instead of default footer
     */
    this.custom = null;
    /**
     * Function to call on submit of modal
     */
    // eslint-disable-next-line  @typescript-eslint/no-empty-function
    this.submit = () => { };
    /**
     * Function to call on close of modal
     */
    // eslint-disable-next-line  @typescript-eslint/no-empty-function
    this.close = () => { };
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.el);
    }
  }
  /**
   * render slot when custom attribute is passed, else renders the default footer with submit and cancel buttons
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: 'modal-footer-container' },
      h("div", { class: 'modal-footer' }, this.custom ? (h("slot", null)) : (h("span", null,
        h("fw-button", { color: 'secondary', onClick: () => this.close() }, this.cancelText || TranslationController.t('modal.cancel')),
        h("fw-button", { color: this.submitColor, disabled: this.submitDisabled, onClick: () => this.submit() }, this.submitText || TranslationController.t('modal.ok')))))));
  }
  static get is() { return "fw-modal-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal-footer.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-footer.css"]
  }; }
  static get properties() { return {
    "submitText": {
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
        "text": "The text for the submit button"
      },
      "attribute": "submit-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "cancelText": {
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
        "text": "The text for the cancel button"
      },
      "attribute": "cancel-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "submitDisabled": {
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
        "text": "Default state of submit button"
      },
      "attribute": "submit-disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "submitColor": {
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
        "text": "The color of submit button"
      },
      "attribute": "submit-color",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "submit": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Function to call on submit of modal"
      },
      "attribute": "submit",
      "reflect": false,
      "defaultValue": "() => {}"
    },
    "close": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Function to call on close of modal"
      },
      "attribute": "close",
      "reflect": false,
      "defaultValue": "() => {}"
    }
  }; }
  static get elementRef() { return "el"; }
}
