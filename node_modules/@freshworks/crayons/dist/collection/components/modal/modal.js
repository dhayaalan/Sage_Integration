import { Component, Element, Event, Method, Prop, State, Watch, h, } from '@stencil/core';
import { getFocusableChildren } from '../../utils';
import { TranslationController } from '../../global/Translation';
import { addRTL } from '../../utils';
export class Modal {
  constructor() {
    /**
     * Property to add or remove the top right close icon button
     */
    this.hasCloseIconButton = true;
    /**
     * The icon to be displayed with the title
     */
    this.icon = '';
    /**
     * Size of the modal
     */
    this.size = 'standard';
    /**
     * The text for the submit button
     */
    //@i18n({ keyName: 'modal.ok' })
    this.submitText = '';
    /**
     * The text for the cancel button
     */
    //@i18n({ keyName: 'modal.cancel' })
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
     * Hide footer for the modal
     */
    this.hideFooter = false;
    /**
     * Convert modal to slider
     */
    this.slider = false;
    /**
     * Toggle the visibility of the modal
     */
    this.isOpen = false;
    /**
     * private
     * Modal container ref
     */
    this.modalContainer = null;
    /**
     * private
     * Handler to run on modal container opening
     */
    this.modalContainerHandler = null;
    /**
     * private
     * Modal first focus element
     */
    this.firstFocusableElement = null;
    /**
     * private
     * Handler to first focusable element. Focuses last element on tab for focus locking.
     */
    this.firstFocusableElementHandler = null;
    /**
     * private
     * Modal last focus element
     */
    this.lastFocusableElement = null;
    /**
     * private
     * Handler for last focusable element. Focus first element on shift+tab for focus locking.
     */
    this.lastFocusableElementHandler = null;
    /**
     * private
     * Modal element to focus on open
     */
    this.modalOpenFocusElement = null;
    /**
     * private
     * flag to add events to elements only on initial modal load
     */
    this.accessibilityAdded = false;
    /**
     * private
     * escape key handler
     */
    this.escapeHandler = null;
    /**
     * private
     * styleVariation styles that vary in normal and slider variations
     */
    this.styleVariation = {
      closeColor: {
        modal: '#475867',
        slider: '#FFFFFF',
      },
      closeSize: {
        modal: 10,
        slider: 12,
      },
      closeName: {
        modal: 'cross',
        slider: 'cross-big',
      },
    };
  }
  connectedCallback() {
    addRTL(this.el);
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad() {
    if (!this.modalTitle) {
      this.modalTitle = this.el.querySelector('fw-modal-title');
    }
    if (!this.modalFooter) {
      this.modalFooter = this.el.querySelector('fw-modal-footer');
      if (this.modalFooter) {
        this.modalFooter.submit = this.submit.bind(this);
        this.modalFooter.close = this.close.bind(this);
      }
    }
    if (!this.modalContent) {
      this.modalContent = this.el.querySelector('fw-modal-content');
    }
    if (this.hideFooter && this.modalFooter) {
      this.modalFooter.style.display = 'none';
    }
    if (!this.modalContent && (this.modalTitle || this.modalFooter)) {
      /**
       * Error that occurs when fw-modal-header or fw-modal-footer is used without
       * fw-modal-content component. If this not handled, the content that goes inside
       * fw-modal-content would have fw-modal-header or fw-modal-footer.
       * This would lead to unexpected results such as header or footer having padding and scroll.
       */
      throw new Error('Composition Error: fw-modal component must have fw-modal-content component when \
         either fw-modal-header or fw-modal-footer components are used for modal composition');
    }
  }
  componentDidLoad() {
    if (this.isOpen && !this.accessibilityAdded) {
      document.body.style.overflow = 'hidden';
      this.addAccesibilityEvents();
    }
  }
  disconnectedCallback() {
    if (this.isOpen) {
      document.body.style.overflow = 'auto';
      this.removeAccesibilityEvents();
    }
  }
  visibilityChange(open) {
    if (!open) {
      document.body.style.overflow = 'auto';
      this.removeAccesibilityEvents();
      this.fwClose.emit();
    }
    else {
      document.body.style.overflow = 'hidden';
      this.addAccesibilityEvents();
      this.fwOpen.emit();
    }
  }
  footerVisibilityChange(hideFooter) {
    if (this.modalFooter) {
      if (hideFooter) {
        this.modalFooter.style.display = 'none';
      }
      else {
        this.modalFooter.style.display = 'block';
      }
    }
  }
  /**
   * Method available from the component to perform close action on the modal
   * @returns promise that resolves to true
   */
  async close() {
    this.isOpen = false;
    return true;
  }
  /**
   * Method available from the component to perform open action on the modal
   * @returns promise that resolves to true
   */
  async open() {
    this.isOpen = true;
    return true;
  }
  /**
   * private submit
   */
  submit() {
    this.fwSubmit.emit();
  }
  /**
   * Adds accesibility related events to the component.
   * Major actions would be to focus-lock inside modal and to focus on close button when opening the component.
   */
  addAccesibilityEvents() {
    var _a, _b, _c;
    if (!this.accessibilityAdded ||
      !((_a = this.firstFocusableElement) === null || _a === void 0 ? void 0 : _a.parentNode) ||
      !((_b = this.modalOpenFocusElement) === null || _b === void 0 ? void 0 : _b.parentNode) ||
      !((_c = this.lastFocusableElement) === null || _c === void 0 ? void 0 : _c.parentNode)) {
      this.modalContainerHandler &&
        this.modalContainer.removeEventListener('animationend', this.modalContainerHandler);
      this.modalContainerHandler = (() => {
        this.firstFocusableElementHandler &&
          this.firstFocusableElement.removeEventListener('keydown', this.firstFocusableElementHandler);
        this.lastFocusableElementHandler &&
          this.lastFocusableElement.removeEventListener('keydown', this.lastFocusableElementHandler);
        /**
         * Focus trapping inside Modal. Below function gets all focusable elements from the modal.
         * These include elements inside shadow dom too.
         */
        const focusableElements = getFocusableChildren(this.el);
        if (focusableElements.length) {
          this.firstFocusableElement = focusableElements[0];
          this.lastFocusableElement =
            focusableElements[focusableElements.length - 1];
          this.modalOpenFocusElement =
            focusableElements.length > 1 &&
              this.firstFocusableElement.classList.contains('close-btn')
              ? focusableElements[1]
              : this.firstFocusableElement;
          this.lastFocusableElementHandler = ((e) => {
            if (!e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              this.focusElement(this.firstFocusableElement);
            }
          }).bind(this);
          this.firstFocusableElementHandler = ((e) => {
            if (e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              this.focusElement(this.lastFocusableElement);
            }
          }).bind(this);
          this.lastFocusableElement.addEventListener('keydown', this.lastFocusableElementHandler);
          this.firstFocusableElement.addEventListener('keydown', this.firstFocusableElementHandler);
        }
        if (this.isOpen && this.modalOpenFocusElement) {
          this.focusElement(this.modalOpenFocusElement);
        }
      }).bind(this);
      this.modalContainer &&
        this.modalContainer.addEventListener('animationend', this.modalContainerHandler);
      this.accessibilityAdded = true;
    }
    this.escapeHandler = ((e) => {
      if (e.keyCode === 27) {
        this.isOpen = false;
      }
    }).bind(this);
    document.addEventListener('keydown', this.escapeHandler);
  }
  /**
   * Removes accesibility related events bound to the document.
   */
  removeAccesibilityEvents() {
    if (this.escapeHandler) {
      document.removeEventListener('keydown', this.escapeHandler);
      this.escapeHandler = null;
    }
  }
  /**
   * @param element element to focus on
   */
  focusElement(element) {
    try {
      if (element.setFocus) {
        element.setFocus();
      }
      else {
        element.focus();
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  /**
   * Renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon() {
    return h("fw-icon", { class: 'icon', name: this.icon, size: 16 });
  }
  /**
   * Renders title text and description in modal header.
   * @returns {JSX.Element}
   */
  renderTitle() {
    return (h("fw-modal-title", { icon: this.icon, titleText: this.titleText, description: this.description }));
  }
  /**
   * renders the slot content in the modal.
   * @returns {JSX.Element}
   */
  renderContent() {
    return (h("fw-modal-content", null,
      h("slot", null)));
  }
  /**
   * renders the default footer in the modal
   * @returns {JSX.Element}
   */
  renderFooter() {
    return (h("fw-modal-footer", { submitText: this.submitText || TranslationController.t('modal.ok'), cancelText: this.cancelText || TranslationController.t('modal.cancel'), submitDisabled: this.submitDisabled, submitColor: this.submitColor, submit: this.submit.bind(this), close: this.close.bind(this), style: { display: this.hideFooter ? 'none' : 'block' } }));
  }
  /**
   * renders either default modal content based on attributes or renders the modal child components like
   * modal-title, modal-content and modal-footer components.
   * @returns {JSX.Element}
   */
  render() {
    const variation = this.styleVariation;
    return (h("div", { class: {
        'modal-overlay': true,
        'visible': this.isOpen,
        'slider': this.slider,
      } },
      h("div", { class: { modal: true, [this.size]: true }, "aria-modal": 'true', ref: (el) => (this.modalContainer = el) },
        this.hasCloseIconButton && (h("button", { class: 'close-btn', onClick: () => this.close() },
          h("fw-icon", { name: this.slider
              ? variation.closeName.slider
              : variation.closeName.modal, library: 'system', color: this.slider
              ? variation.closeColor.slider
              : variation.closeColor.modal, size: this.slider
              ? variation.closeSize.slider
              : variation.closeSize.modal }))),
        h("div", { class: 'modal-container' },
          this.modalTitle ? '' : this.titleText ? this.renderTitle() : '',
          this.modalContent ? h("slot", null) : this.renderContent(),
          this.modalFooter ? '' : this.renderFooter()))));
  }
  static get is() { return "fw-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal.css"]
  }; }
  static get properties() { return {
    "hasCloseIconButton": {
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
        "text": "Property to add or remove the top right close icon button"
      },
      "attribute": "has-close-icon-button",
      "reflect": false,
      "defaultValue": "true"
    },
    "titleText": {
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
        "text": "The title text to be displayed on the modal"
      },
      "attribute": "title-text",
      "reflect": false
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
        "text": "The description text to be displayed on the modal"
      },
      "attribute": "description",
      "reflect": false
    },
    "icon": {
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
        "text": "The icon to be displayed with the title"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "''"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'standard' | 'small' | 'large'",
        "resolved": "\"large\" | \"small\" | \"standard\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the modal"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'standard'"
    },
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
    "hideFooter": {
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
        "text": "Hide footer for the modal"
      },
      "attribute": "hide-footer",
      "reflect": false,
      "defaultValue": "false"
    },
    "slider": {
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
        "text": "Convert modal to slider"
      },
      "attribute": "slider",
      "reflect": false,
      "defaultValue": "false"
    },
    "isOpen": {
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
        "text": "Toggle the visibility of the modal"
      },
      "attribute": "is-open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "modalTitle": {},
    "modalFooter": {},
    "modalContent": {}
  }; }
  static get events() { return [{
      "method": "fwSubmit",
      "name": "fwSubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the default action button is clicked."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "fwOpen",
      "name": "fwOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when modal is opened."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "fwClose",
      "name": "fwClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when modal is closed."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "close": {
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
        "text": "Method available from the component to perform close action on the modal",
        "tags": [{
            "name": "returns",
            "text": "promise that resolves to true"
          }]
      }
    },
    "open": {
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
        "text": "Method available from the component to perform open action on the modal",
        "tags": [{
            "name": "returns",
            "text": "promise that resolves to true"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "isOpen",
      "methodName": "visibilityChange"
    }, {
      "propName": "hideFooter",
      "methodName": "footerVisibilityChange"
    }]; }
}
