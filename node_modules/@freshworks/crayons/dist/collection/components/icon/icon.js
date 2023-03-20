import { Build, Component, Element, Prop, State, h, Watch, } from '@stencil/core';
import { fetchIcon, waitUntilVisible } from './icon.utils';
import { getIconLibrary, watchIcon, unwatchIcon, getSVGElement, } from './library.icon.utils';
export class Icon {
  constructor() {
    /**
     * Identifier of the icon. The attribute’s value must be a valid JS Import Name of the svg in the named export from @freshworks/crayons-icon.
     */
    this.dataSvg = '';
    /**
     * Identifier of the icon. The attribute’s value must be a valid url of the svg icon.
     */
    this.url = '';
    /**
     * Root Margin in px or percentage for Intersection-Observer. This means from ref to bottom of loaded view , the item loads when it crosses above the negative y margin.
     */
    this.xRootMargin = '50px';
    /**
     * Color in which the icon is displayed, specified as a standard CSS color or as a HEX code.
     */
    this.color = '';
    /**
     * Name of External Library to be used
     */
    this.library = 'crayons';
    /**
     * Enable Intersection Observer. Default is false.
     */
    this.lazy = false;
    this.setElVisible = false;
    this.visible = false;
  }
  async componentWillLoad() {
    if (!this.lazy)
      this.visible = true;
    else
      this.visible = this.setElVisible;
    if (!Build.isBrowser || !this.visible) {
      return;
    }
    this.applyIconPropstoState();
  }
  connectedCallback() {
    watchIcon(this);
    this.lazy &&
      waitUntilVisible(this.intersectionObserver, this.xRootMargin, this.el, () => {
        this.setElVisible = true;
        this.applyIconPropstoState();
      });
  }
  nameChangeHandler() {
    this.applyIconPropstoState();
  }
  dataSvgChangeHandler() {
    this.applyIconPropstoState();
  }
  urlChangeHandler() {
    this.applyIconPropstoState();
  }
  disconnectedCallback() {
    unwatchIcon(this);
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
  }
  async applyIconPropstoState() {
    const { name, dataSvg, library } = this;
    try {
      if (!name && dataSvg) {
        this.svg = dataSvg;
      }
      else if (name) {
        const url = this.getIconUrl(name, library);
        this.svg = await this.drawIcon(url);
      }
      else {
        console.error("Please provide valid props either 'name' or 'data-svg'.Check the usage docs.");
        throw '-invalid props-';
      }
    }
    catch (e) {
      console.error(e.message);
      this.loadFallbackImage();
    }
  }
  async drawIcon(url) {
    const { name, library } = this;
    try {
      const svgEl = await getSVGElement(url);
      this.applySVGMutation(library, name, svgEl);
      return svgEl.outerHTML;
    }
    catch (ex) {
      throw new Error(`Exception occured while drawing Icon- ${name} : ${ex.message}`);
    }
  }
  /** Fetches the icon and redraws it. Used to handle library registrations. */
  redrawIcon() {
    this.applyIconPropstoState();
  }
  async loadFallbackImage() {
    this.svg = await fetchIcon(this.getIconUrlfromlib('image', 'system'));
  }
  getIconUrl(icon, lib) {
    let urlPath = '';
    if (this.url) {
      urlPath = this.url;
    }
    else if (!this.src) {
      urlPath = this.getIconUrlfromlib(icon, lib);
      if (urlPath === undefined) {
        console.error(`Error while resolving url for ${this.name}|${this.library}. Please check the lib registration/resolver function.`);
        return;
      }
    }
    else {
      urlPath = `${this.src}/${this.name}.svg`;
    }
    return urlPath;
  }
  getIconUrlfromlib(icon, lib) {
    const library = getIconLibrary(lib);
    if (icon && library) {
      return library.resolver(icon);
    }
    else {
      console.error(`Icon ${icon}/${lib} not registered.Check the Implementation.`);
      return;
    }
  }
  applySVGMutation(library, icon, svgEl) {
    const iconlibrary = getIconLibrary(library);
    if (iconlibrary && iconlibrary.mutator) {
      iconlibrary.mutator(svgEl, icon);
    }
  }
  render() {
    const style = {};
    const accessibilityProps = { 'aria-hidden': true };
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;
    if (hasLabel) {
      accessibilityProps['role'] = 'img';
      accessibilityProps['aria-label'] = this.label;
    }
    if (this.size !== undefined)
      style['--fw-icon-size'] = `${this.size}px`;
    if (this.color !== undefined)
      style['--fw-icon-color'] = this.color;
    return (h("div", Object.assign({ class: 'icon' }, accessibilityProps, { style: Object.assign({ height: ` ${this.height}px`, width: `${this.width}px` }, style), innerHTML: this.svg })));
  }
  static get is() { return "fw-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get assetsDirs() { return ["icon-assets"]; }
  static get properties() { return {
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
        "text": "Identifier of the icon. The attribute\u2019s value must be a valid svg Name in the Crayons-Icon set."
      },
      "attribute": "name",
      "reflect": true
    },
    "label": {
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
        "text": "An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices."
      },
      "attribute": "label",
      "reflect": false
    },
    "dataSvg": {
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
        "text": "Identifier of the icon. The attribute\u2019s value must be a valid JS Import Name of the svg in the named export from @freshworks/crayons-icon."
      },
      "attribute": "data-svg",
      "reflect": false,
      "defaultValue": "''"
    },
    "url": {
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
        "text": "Identifier of the icon. The attribute\u2019s value must be a valid url of the svg icon."
      },
      "attribute": "url",
      "reflect": false,
      "defaultValue": "''"
    },
    "src": {
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
        "text": "Identifier of the icon. The attribute\u2019s value must be a valid path to svg file."
      },
      "attribute": "src",
      "reflect": false
    },
    "size": {
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
        "text": "Size of the icon, specified in number of  pixels. This will be square coordinates of (w X h) = size X size"
      },
      "attribute": "size",
      "reflect": false
    },
    "xRootMargin": {
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
        "text": "Root Margin in px or percentage for Intersection-Observer. This means from ref to bottom of loaded view , the item loads when it crosses above the negative y margin."
      },
      "attribute": "x-root-margin",
      "reflect": false,
      "defaultValue": "'50px'"
    },
    "width": {
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
        "text": "Width of the icon, specified in number of  pixels."
      },
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
        "text": "Height of the icon, specified in number of  pixels."
      },
      "attribute": "height",
      "reflect": false
    },
    "color": {
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
        "text": "Color in which the icon is displayed, specified as a standard CSS color or as a HEX code."
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "''"
    },
    "library": {
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
        "text": "Name of External Library to be used"
      },
      "attribute": "library",
      "reflect": false,
      "defaultValue": "'crayons'"
    },
    "lazy": {
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
        "text": "Enable Intersection Observer. Default is false."
      },
      "attribute": "lazy",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "setElVisible": {},
    "visible": {},
    "intersectionObserver": {},
    "svg": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "name",
      "methodName": "nameChangeHandler"
    }, {
      "propName": "dataSvg",
      "methodName": "dataSvgChangeHandler"
    }, {
      "propName": "url",
      "methodName": "urlChangeHandler"
    }]; }
}
