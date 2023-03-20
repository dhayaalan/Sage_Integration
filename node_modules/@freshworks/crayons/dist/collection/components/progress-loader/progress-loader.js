import { Component, Host, h, Prop, Method, Watch } from '@stencil/core';
import { createProgressLoaderContainer, getPropOptions, } from './progress-loader-util';
export class ProgressLoader {
  constructor() {
    /**
     * Specify a selector to change the parent container. Default is `body`
     * Selector is accessed internally via document.querySelector method
     */
    this.parent = 'body';
    /**
     * Changes the minimum percentage used upon starting. Default is `0.08`
     */
    this.minimum = 0.08;
    /**
     * Adjust animation settings using easing (a CSS easing string). Default is `ease`
     */
    this.easing = 'ease';
    /**
     * Add speed (in ms). Default is `200`
     */
    this.speed = 200;
    /**
     * Turn on/off the automatic incrementing behavior by setting this to false. Default is `true`
     */
    this.trickle = true;
    /**
     * Adjust how often to trickle/increment, in ms. Default is `200`
     */
    this.trickleSpeed = 200;
    /**
     * Use Custom markup. To keep the progress bar working, keep an element with class='bar' in there
     */
    this.template = '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="1"></div>';
    /**
     * Show progress loader. Default `false`
     */
    this.show = false;
  }
  /**
   * Method to start showing the progress loader
   */
  async start() {
    try {
      this.show = true;
      this.progressObj.start();
    }
    catch (err) {
      console.error('Error in start method', err);
    }
  }
  /**
   * Method to end the progress. This hides the progress loader
   */
  async done() {
    try {
      this.show = false;
      this.progressObj.done();
    }
    catch (err) {
      console.error('Error in done method', err);
    }
  }
  /**
   * Increments the progress status by a random amount.
   */
  async inc() {
    try {
      this.progressObj.inc();
    }
    catch (err) {
      console.error('Error in inc method', err);
    }
  }
  /**
   * Sets the progress loader status, where `n` is a number from `0.0` to `1.0`.
   */
  async set(n) {
    try {
      this.progressObj.set(n);
    }
    catch (err) {
      console.error('Error in set method', err);
    }
  }
  showChanged(show) {
    if (show) {
      this.progressObj.start();
    }
    else {
      this.progressObj.done();
    }
  }
  disconnectedCallback() {
    this.progressObj.done();
  }
  componentWillLoad() {
    this.progressObj = createProgressLoaderContainer(getPropOptions(this));
    if (this.show)
      this.progressObj.start();
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "fw-progress-loader"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "parent": {
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
        "text": "Specify a selector to change the parent container. Default is `body`\nSelector is accessed internally via document.querySelector method"
      },
      "attribute": "parent",
      "reflect": false,
      "defaultValue": "'body'"
    },
    "minimum": {
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
        "text": "Changes the minimum percentage used upon starting. Default is `0.08`"
      },
      "attribute": "minimum",
      "reflect": false,
      "defaultValue": "0.08"
    },
    "easing": {
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
        "text": "Adjust animation settings using easing (a CSS easing string). Default is `ease`"
      },
      "attribute": "easing",
      "reflect": false,
      "defaultValue": "'ease'"
    },
    "speed": {
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
        "text": "Add speed (in ms). Default is `200`"
      },
      "attribute": "speed",
      "reflect": false,
      "defaultValue": "200"
    },
    "trickle": {
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
        "text": "Turn on/off the automatic incrementing behavior by setting this to false. Default is `true`"
      },
      "attribute": "trickle",
      "reflect": false,
      "defaultValue": "true"
    },
    "trickleSpeed": {
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
        "text": "Adjust how often to trickle/increment, in ms. Default is `200`"
      },
      "attribute": "trickle-speed",
      "reflect": false,
      "defaultValue": "200"
    },
    "template": {
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
        "text": "Use Custom markup. To keep the progress bar working, keep an element with class='bar' in there"
      },
      "attribute": "template",
      "reflect": false,
      "defaultValue": "'<div class=\"bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"1\"></div>'"
    },
    "show": {
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
        "text": "Show progress loader. Default `false`"
      },
      "attribute": "show",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "start": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to start showing the progress loader",
        "tags": []
      }
    },
    "done": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Method to end the progress. This hides the progress loader",
        "tags": []
      }
    },
    "inc": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Increments the progress status by a random amount.",
        "tags": []
      }
    },
    "set": {
      "complexType": {
        "signature": "(n: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets the progress loader status, where `n` is a number from `0.0` to `1.0`.",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "show",
      "methodName": "showChanged"
    }]; }
}
