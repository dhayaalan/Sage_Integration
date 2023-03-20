import { Component, Prop, Element, h } from '@stencil/core';
import { handleKeyDown } from '../../utils';
const ChevronArrow = ({ expanded, iconSize }) => {
  let size;
  switch (iconSize) {
    case 'small':
      size = 7;
      break;
    case 'medium':
      size = 10;
      break;
    case 'large':
      size = 14;
      break;
  }
  const direction = expanded ? 'up' : 'down';
  return (h("fw-icon", { class: 'accordion-icon', name: `chevron-${direction}`, size: size, library: 'system' }));
};
/**
 * @parent accordion
 */
export class AccordionTitle {
  constructor() {
    /**
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.toggleState = () => { };
    /**
     * @internal
     */
    this.expanded = true;
    /**
     * @internal
     */
    this.type = 'default';
    /**
     * Truncate title on text overflow
     */
    this.truncateOnOverflow = true;
    /**
     * The size of the default icon
     */
    this.iconSize = 'medium';
  }
  componentWillLoad() {
    this.expandedIcon = this.el.querySelector('[slot="expanded-icon"');
    this.collapsedIcon = this.el.querySelector('[slot="collapsed-icon"');
  }
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (h("div", { class: {
        'accordion-header': true,
        'collapsed': !this.expanded,
        'no-bounding-box': this.type === 'no_bounding_box',
      }, role: 'button', tabindex: '0', onKeyDown: handleKeyDown(this.toggleState), onClick: this.toggleState, "aria-expanded": this.expanded.toString() },
      h("div", { class: {
          'accordion-title': true,
          'truncate': this.truncateOnOverflow,
        } },
        h("slot", null)),
      this.expandedIcon && this.collapsedIcon ? (h("div", { class: 'accordion-icon' },
        h("slot", { name: this.expanded ? 'expanded-icon' : 'collapsed-icon' }))) : (h(ChevronArrow, { expanded: this.expanded, iconSize: this.iconSize }))));
  }
  static get is() { return "fw-accordion-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["accordion-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["accordion-title.css"]
  }; }
  static get properties() { return {
    "toggleState": {
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
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "toggle-state",
      "reflect": false,
      "defaultValue": "() => {}"
    },
    "expanded": {
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
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "expanded",
      "reflect": false,
      "defaultValue": "true"
    },
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
        "tags": [{
            "name": "internal",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "truncateOnOverflow": {
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
        "text": "Truncate title on text overflow"
      },
      "attribute": "truncate-on-overflow",
      "reflect": false,
      "defaultValue": "true"
    },
    "iconSize": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'large'",
        "resolved": "\"large\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The size of the default icon"
      },
      "attribute": "icon-size",
      "reflect": false,
      "defaultValue": "'medium'"
    }
  }; }
  static get elementRef() { return "el"; }
}
