import { Component, Prop, h, Host } from '@stencil/core';
export class Skeleton {
  constructor() {
    /** Effect the skeleton will use. */
    this.effect = 'pulse';
    /**
     * Variant of the skeleton - circle or rectangle or text
     */
    this.variant = 'text';
    /**
     * Width of the skeleton ex. 100px, 100%, auto etc.
     */
    this.width = null;
    /**
     * Height of the skeleton ex. 100px, 100%, auto etc.
     */
    this.height = null;
    /**
     * MarginBottom of the skeleton ex. 10px, 0 etc.
     */
    this.marginBottom = null;
    /**
     * Number of rows of current skeleton type
     */
    this.count = 1;
    /**
     * Custom css styles (background/margins/width/height etc.)
     *
     * @type {({[k: string]: string} | string)}
     */
    this.customStyles = {};
    this.items = [];
  }
  componentWillLoad() {
    this.init();
  }
  componentWillUpdate() {
    this.init();
  }
  init() {
    this.items.length = this.count;
    this.items.fill(1);
    if (this.customStyles && typeof this.customStyles === 'string') {
      try {
        this.customStyles = JSON.parse(this.customStyles);
      }
      catch (error) {
        console.warn(`can't parse styles`, this.customStyles);
      }
    }
  }
  get style() {
    const dimensionsStyles = {
      width: null,
      height: null,
      marginBottom: null,
    };
    if (this.width) {
      dimensionsStyles.width = this.width;
    }
    if (this.height) {
      dimensionsStyles.height = this.height;
    }
    if (this.marginBottom) {
      dimensionsStyles.marginBottom = this.marginBottom;
    }
    const styles = typeof this.customStyles === 'object' ? this.customStyles : {};
    return Object.assign(Object.assign({}, dimensionsStyles), styles);
  }
  render() {
    return (h(Host, null, this.items.map((_, index) => {
      return (h("div", { part: 'base', key: index, class: {
          circle: this.variant === 'circle',
          rect: this.variant === 'rect',
          skeleton: true,
          pulse: this.effect === 'pulse',
          sheen: this.effect === 'sheen',
          only: this.count === 1,
        }, "aria-busy": 'true', "aria-live": 'polite', style: this.style }));
    })));
  }
  static get is() { return "fw-skeleton"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["skeleton.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["skeleton.css"]
  }; }
  static get properties() { return {
    "effect": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'pulse' | 'sheen' | 'none'",
        "resolved": "\"none\" | \"pulse\" | \"sheen\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Effect the skeleton will use."
      },
      "attribute": "effect",
      "reflect": false,
      "defaultValue": "'pulse'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'circle' | 'rect' | 'text'",
        "resolved": "\"circle\" | \"rect\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Variant of the skeleton - circle or rectangle or text"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "width": {
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
        "text": "Width of the skeleton ex. 100px, 100%, auto etc."
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "null"
    },
    "height": {
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
        "text": "Height of the skeleton ex. 100px, 100%, auto etc."
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "null"
    },
    "marginBottom": {
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
        "text": "MarginBottom of the skeleton ex. 10px, 0 etc."
      },
      "attribute": "margin-bottom",
      "reflect": false,
      "defaultValue": "null"
    },
    "count": {
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
        "text": "Number of rows of current skeleton type"
      },
      "attribute": "count",
      "reflect": false,
      "defaultValue": "1"
    },
    "customStyles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "{ [key: string]: string } | string",
        "resolved": "string | { [key: string]: string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "name": "type",
            "text": "{({[k: string]: string} | string)}"
          }],
        "text": "Custom css styles (background/margins/width/height etc.)"
      },
      "attribute": "custom-styles",
      "reflect": false,
      "defaultValue": "{}"
    }
  }; }
}
