import { Component, h, Prop, State, Watch, Element, Host } from '@stencil/core';
import { TranslationController } from '../../../../global/Translation';
export class CustomCellParagraph {
  constructor() {
    /**
     * text to display inside the cell
     */
    this.text = '';
    /** max height to restrict trimming. 60px to allow for 3 lines (3 * 20 line-height) */
    this.maxHeight = '60px';
    /**
     * hide and show toggle button state based on how long the text is
     */
    this.showToggle = false;
    /**
     * hide and show text
     */
    this.hide = true;
    /**
     * toggle paragraph button
     */
    this.toggleParaButton = null;
  }
  textChangeHandler() {
    this.showToggleOnTextChange();
  }
  /**
   * componentDidLoad lifecycle event
   */
  componentDidLoad() {
    this.showToggleOnTextChange();
  }
  /** on focusing of the para variant */
  onFocus() {
    if (this.toggleParaButton) {
      this.toggleParaButton.focus();
    }
    else {
      this.el.parentElement.setAttribute('tabindex', '0');
      this.el.parentElement.focus();
    }
  }
  /**
   * showToggleOnTextChange show the button based on number of lines in the paragraph
   */
  showToggleOnTextChange() {
    const paraHeight = this.el.getBoundingClientRect().height;
    if (paraHeight >= parseInt(this.maxHeight)) {
      this.showToggle = true;
    }
    else {
      this.showToggle = false;
    }
  }
  /**
   * toggleParagraph show and hide the longer paragraph text
   */
  toggleParagraph() {
    this.hide = !this.hide;
    if (this.hide) {
      this.maxHeight = '60px';
    }
    else {
      this.maxHeight = 'none';
    }
  }
  /**
   * render method
   */
  render() {
    const para = (h("p", { class: {
        'paragraph-text': true,
        'open': this.showToggle,
        'expanded': !this.hide,
      }, style: {
        maxHeight: this.maxHeight,
      } },
      this.text,
      ' '));
    return (h(Host, { onFocus: () => this.onFocus() },
      h("div", { class: 'paragraph-container' },
        this.showToggle && this.hide ? (h("fw-tooltip", { content: this.text, hoist: true, placement: 'bottom-start', fallbackPlacements: ['top-start'] }, para)) : (para),
        this.showToggle && (h("div", { class: 'paragraph-toggle', role: 'button', tabIndex: 0, onKeyUp: (event) => (event.code === 'Space' || event.code === 'Enter') &&
            this.toggleParagraph(), onClick: () => this.toggleParagraph(), ref: (el) => (this.toggleParaButton = el) }, this.hide ? (h("span", null, TranslationController.t('datatable.showMore'))) : (h("span", null, TranslationController.t('datatable.showLess'))))))));
  }
  static get is() { return "fw-custom-cell-paragraph"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["custom-cell-paragraph.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["custom-cell-paragraph.css"]
  }; }
  static get properties() { return {
    "text": {
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
        "text": "text to display inside the cell"
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "maxHeight": {},
    "showToggle": {},
    "hide": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "text",
      "methodName": "textChangeHandler"
    }]; }
}
