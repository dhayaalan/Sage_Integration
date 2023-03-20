import { Component, Element, Event, Prop, Method, h, Listen, State, } from '@stencil/core';
import { handleKeyDown } from '../../utils';
export class Tag {
  constructor() {
    /**
     * Sets the state of the tag to disabled. The close button is disabled. If the attribute’s value is undefined, the value is set to false.
     */
    this.disabled = false;
    /**
     * The variant of tag to be displayed.
     */
    this.variant = 'standard';
    /**
     * The props need to be passed for the variant. If the variant is avatar then use this prop to send the props for the fw-avatar component.
     */
    this.graphicsProps = {};
    /**
     * Whether the Tag can be closed.
     */
    this.closable = true;
    /**
     * Whether the Tag is focusable.
     */
    this.focusable = true;
    /**
     * Theme based on which the tag is styled.
     */
    this.state = 'normal';
    /**
     * If true, tag will be focused
     */
    this.isFocused = false;
    /**
     * Index of tag in a group of tags
     */
    this.index = '-1';
    /**
     * Truncate text with ellipsis when text overflows
     */
    this.showEllipsisOnOverflow = false;
    this.addTooltip = false;
    this.removeTag = (e) => {
      if (this.disabled || !this.closable) {
        return;
      }
      const { value, text, index } = this;
      this.fwClosed.emit({ value, text, index });
      e.stopPropagation();
    };
    this.componentDidRender = () => {
      const elLabel = this.divLabel;
      if (elLabel && !this.resizeObserver) {
        this.resizeObserver = new ResizeObserver(() => {
          if (elLabel.offsetWidth > 0) {
            this.addTooltip =
              elLabel.offsetWidth < elLabel.scrollWidth ? true : false;
          }
        });
        this.resizeObserver.observe(elLabel);
      }
    };
    this.removeResizeObserver = () => {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    };
  }
  onKeyDown(event) {
    switch (event.key) {
      case 'Backspace':
        this.removeTag(event);
        event.preventDefault();
        break;
    }
  }
  async setFocus() {
    this.tagContainer.focus();
  }
  renderText() {
    return [
      h("span", { class: {
          'primary': !!this.subText,
          'content': true,
          'end-padding': !this.subText && !this.closable,
        } }, this.text),
      this.subText && (h("span", { class: `secondary content ${!this.closable ? 'end-padding' : ''}` }, this.subText)),
    ];
  }
  renderLabel() {
    return (h("div", { class: 'ellipsis', ref: (el) => (this.divLabel = el) }, this.renderText()));
  }
  renderTruncatedContent() {
    return (h("div", { class: 'truncated-content' }, this.addTooltip ? (h("fw-tooltip", { trigger: 'hover', content: `${this.text}${this.subText ? ` ${this.subText}` : ''}`, hoist: true }, this.renderLabel())) : (this.renderLabel())));
  }
  renderContent() {
    switch (this.variant) {
      case 'standard':
        return this.showEllipsisOnOverflow
          ? this.renderTruncatedContent()
          : this.renderText();
      case 'avatar': {
        return [
          h("fw-avatar", Object.assign({ mode: this.state === 'error' ? this.state : 'dark', size: 'xsmall' }, this.graphicsProps)),
          this.showEllipsisOnOverflow
            ? this.renderTruncatedContent()
            : this.renderText(),
        ];
      }
      default:
        break;
    }
  }
  disconnectedCallback() {
    this.removeResizeObserver();
  }
  render() {
    return (h("div", { role: 'button', tabindex: '-1', class: `tag ${this.isFocused ? 'focused' : ''} ${this.state} tag-${this.variant} ${this.disabled ? 'disabled' : ''} ${this.showEllipsisOnOverflow ? 'tag-with-ellipsis' : ''}`, ref: (tagContainer) => (this.tagContainer = tagContainer) },
      this.renderContent(),
      this.closable && (h("span", { role: 'button', tabIndex: this.focusable ? 0 : -1, class: `remove-btn ${this.variant} ${this.disabled ? 'disabled' : ''}`, onClick: (e) => this.removeTag(e), onKeyDown: handleKeyDown(this.removeTag) },
        h("fw-icon", { name: 'cross', size: 8, library: 'system' })))));
  }
  static get is() { return "fw-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tag.css"]
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
        "text": "Display text in the tag component."
      },
      "attribute": "text",
      "reflect": false
    },
    "subText": {
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
        "text": "Display sub text in the tag component."
      },
      "attribute": "sub-text",
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
        "text": "Sets the state of the tag to disabled. The close button is disabled. If the attribute\u2019s value is undefined, the value is set to false."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value associated with the tag component, that is saved when the form data is saved."
      },
      "attribute": "value",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagVariant",
        "resolved": "\"avatar\" | \"standard\"",
        "references": {
          "TagVariant": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The variant of tag to be displayed."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "graphicsProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The props need to be passed for the variant. If the variant is avatar then use this prop to send the props for the fw-avatar component."
      },
      "defaultValue": "{}"
    },
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
        "text": "Whether the Tag can be closed."
      },
      "attribute": "closable",
      "reflect": false,
      "defaultValue": "true"
    },
    "focusable": {
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
        "text": "Whether the Tag is focusable."
      },
      "attribute": "focusable",
      "reflect": false,
      "defaultValue": "true"
    },
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagState",
        "resolved": "\"error\" | \"normal\" | \"transparent\"",
        "references": {
          "TagState": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Theme based on which the tag is styled."
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'normal'"
    },
    "isFocused": {
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
        "text": "If true, tag will be focused"
      },
      "attribute": "is-focused",
      "reflect": false,
      "defaultValue": "false"
    },
    "index": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | number",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Index of tag in a group of tags"
      },
      "attribute": "index",
      "reflect": false,
      "defaultValue": "'-1'"
    },
    "showEllipsisOnOverflow": {
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
        "text": "Truncate text with ellipsis when text overflows"
      },
      "attribute": "show-ellipsis-on-overflow",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "addTooltip": {}
  }; }
  static get events() { return [{
      "method": "fwClosed",
      "name": "fwClosed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when the tag is deselected."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
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
  static get listeners() { return [{
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
