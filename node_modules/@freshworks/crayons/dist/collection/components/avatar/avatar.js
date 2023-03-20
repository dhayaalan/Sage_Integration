import { Component, Prop, h } from '@stencil/core';
export class Avatar {
  constructor() {
    this.shape = 'circle';
    this.name = '';
    this.size = 'large';
    this.mode = 'dark';
  }
  /**
   * Function to get the initials to display inside the avatar
   * @returns initials from either initials prop or from name prop
   */
  getInitials() {
    let initials = '';
    if (this.initials) {
      initials = this.initials;
    }
    else if (this.name.trim().length > 0) {
      const nameParts = this.name.trim().split(' ');
      if (nameParts.length === 1) {
        initials = nameParts.shift().charAt(0);
      }
      else if (nameParts.length > 1) {
        initials = nameParts.shift().charAt(0) + nameParts.pop().charAt(0);
      }
    }
    return initials;
  }
  renderAltIcon() {
    const color = this.mode === 'error' ? '#C82124' : '#283DA5';
    return (h("svg", { id: this.mode === 'error' ? 'error-svg' : 'default-svg', width: 24, height: 24, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
      h("g", { "clip-path": 'url(#a)', fill: color },
        h("circle", { cx: 12, cy: 9, r: 5 }),
        h("ellipse", { cx: 12, cy: 24.5, rx: 11, ry: 9.5 })),
      h("defs", null,
        h("clipPath", { id: 'a' },
          h("path", { fill: '#fff', d: 'M0 0h24v24H0z' })))));
  }
  render() {
    let strBaseClassName = `avatar 
    avatar--${this.shape}
    avatar--${this.size}
    avatar--${this.mode}
    `;
    if (!this.image && (this.initials || this.name)) {
      strBaseClassName += ` avatar--${this.mode}--initials`;
    }
    else if (!this.image) {
      strBaseClassName += ` avatar--${this.mode}--default`;
    }
    return (h("div", { class: strBaseClassName, "aria-label": this.alt }, this.image ? (h("img", { part: 'image', class: 'avatar__image', src: this.image, alt: this.alt })) : this.initials || this.name ? (h("div", { part: 'initials', class: 'avatar__initials' }, this.getInitials())) : (this.renderAltIcon())));
  }
  static get is() { return "fw-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["avatar.css"]
  }; }
  static get properties() { return {
    "image": {
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
        "text": ""
      },
      "attribute": "image",
      "reflect": false
    },
    "alt": {
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
        "text": ""
      },
      "attribute": "alt",
      "reflect": false
    },
    "initials": {
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
        "text": ""
      },
      "attribute": "initials",
      "reflect": false
    },
    "shape": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'circle' | 'square' | 'rounded'",
        "resolved": "\"circle\" | \"rounded\" | \"square\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "shape",
      "reflect": false,
      "defaultValue": "'circle'"
    },
    "name": {
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
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'xxlarge'\n    | 'xlarge'\n    | 'large'\n    | 'medium'\n    | 'small'\n    | 'xsmall'\n    | 'xxsmall'",
        "resolved": "\"large\" | \"medium\" | \"small\" | \"xlarge\" | \"xsmall\" | \"xxlarge\" | \"xxsmall\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'large'"
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'dark' | 'light' | 'error'",
        "resolved": "\"dark\" | \"error\" | \"light\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "'dark'"
    }
  }; }
}
