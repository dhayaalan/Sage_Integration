import { Component, Element, Prop, Method, h } from '@stencil/core';
import { hasSlot } from '../../utils';
export class Tooltip {
  constructor() {
    /**
     * Placement of the popover content with respect to the popover trigger.
     */
    this.placement = 'top';
    /**
     * Alternative placement for popover if the default placement is not possible.
     */
    this.fallbackPlacements = ['top'];
    /**
     * Content of the tooltip.
     */
    this.content = '';
    /**
     * Distance defines the distance between the popover trigger and the popover content along y-axis.
     */
    this.distance = '10';
    /**
     * The trigger event on which the popover-content is displayed. The available options are
     * 'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set.
     */
    this.trigger = 'hover';
    /**
     * Option to prevent the tooltip from being clipped when the component is placed inside a container with
     * `overflow: auto|hidden|scroll`.
     */
    this.hoist = false;
    /**
     * Private
     * Set to true if we want to render slot instead of default footer.
     */
    this.custom = null;
  }
  /**
   * lifecycle event, called once just after the component is first connected to the DOM.
   */
  componentWillLoad() {
    if (this.custom === null) {
      this.custom = hasSlot(this.host, 'tooltip-content');
    }
  }
  /**
   * Shows the tooltip.
   * @returns promise that resolves to true
   */
  async show() {
    this.popoverRef.show();
    return true;
  }
  /**
   * Hides the tooltip.
   * @returns promise that resolves to true
   */
  async hide() {
    this.popoverRef.hide();
    return true;
  }
  /**
   * Renders trigger and content elements through fw-popper element.
   * @returns {JSX.Element}
   */
  render() {
    return (h("fw-popover", { trigger: this.trigger, placement: this.placement, fallbackPlacements: this.fallbackPlacements, sameWidth: false, distance: this.distance, "disable-transition": 'true', "has-border": 'false', hoist: this.hoist, ref: (popoverRef) => (this.popoverRef = popoverRef) },
      h("slot", { slot: 'popover-trigger' }),
      this.custom ? (h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' },
        h("slot", { name: 'tooltip-content' }))) : (this.content.trim().length && (h("div", { class: 'tooltip', slot: 'popover-content', role: 'tooltip' }, this.content.trim())))));
  }
  static get is() { return "fw-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tooltip.css"]
  }; }
  static get properties() { return {
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverPlacementType",
        "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Placement of the popover content with respect to the popover trigger."
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'top'"
    },
    "fallbackPlacements": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "[PopoverPlacementType]",
        "resolved": "[PopoverPlacementType]",
        "references": {
          "PopoverPlacementType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Alternative placement for popover if the default placement is not possible."
      },
      "defaultValue": "['top']"
    },
    "content": {
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
        "text": "Content of the tooltip."
      },
      "attribute": "content",
      "reflect": false,
      "defaultValue": "''"
    },
    "distance": {
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
        "text": "Distance defines the distance between the popover trigger and the popover content along y-axis."
      },
      "attribute": "distance",
      "reflect": false,
      "defaultValue": "'10'"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PopoverTriggerType",
        "resolved": "\"click\" | \"hover\" | \"manual\"",
        "references": {
          "PopoverTriggerType": {
            "location": "import",
            "path": "../../utils/types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The trigger event on which the popover-content is displayed. The available options are\n'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set."
      },
      "attribute": "trigger",
      "reflect": false,
      "defaultValue": "'hover'"
    },
    "hoist": {
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
        "text": "Option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`."
      },
      "attribute": "hoist",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "show": {
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
        "text": "Shows the tooltip.",
        "tags": [{
            "name": "returns",
            "text": "promise that resolves to true"
          }]
      }
    },
    "hide": {
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
        "text": "Hides the tooltip.",
        "tags": [{
            "name": "returns",
            "text": "promise that resolves to true"
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
