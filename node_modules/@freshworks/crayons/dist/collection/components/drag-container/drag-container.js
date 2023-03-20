import { Component, Element, Event, Host, Prop, h, } from '@stencil/core';
import { Draggable } from '../../utils/draggable';
export class DragContainer {
  constructor() {
    /**
     * Id of the fw-sortable element from which draggable content can be accepted. Add comma separated id's for multiple containers.
     */
    this.acceptFrom = '';
    /**
     * Whether the drag element should be added to the container on drop. If set to false, the placeholder will be retained.
     */
    this.addOnDrop = true;
    /**
     * Whether the drag element should be moved or copied.
     */
    this.copy = true;
    /**
     * The class name for the drag/drop placeholder. Add space separated class names for multiple classes
     */
    this.placeholderClass = '';
    /**
     * Whether the list should be sortable.
     */
    this.sortable = true;
  }
  componentWillLoad() {
    this.containerInstance = new Draggable(this.host, {
      acceptFrom: this.acceptFrom,
      addOnDrop: this.addOnDrop,
      copy: this.copy,
      placeholderClass: this.placeholderClass,
      sortable: this.sortable,
    });
    this.host.addEventListener('fwDropBase', this.emitFwDrop.bind(this));
  }
  emitFwDrop(ev) {
    this.fwDrop.emit(ev['detail']);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.containerInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    this.host.removeEventListener('fwDropBase', this.emitFwDrop);
  }
  render() {
    return h(Host, { class: 'drag-container' });
  }
  static get is() { return "fw-drag-container"; }
  static get originalStyleUrls() { return {
    "$": ["drag-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["drag-container.css"]
  }; }
  static get properties() { return {
    "acceptFrom": {
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
        "text": "Id of the fw-sortable element from which draggable content can be accepted. Add comma separated id's for multiple containers."
      },
      "attribute": "accept-from",
      "reflect": false,
      "defaultValue": "''"
    },
    "addOnDrop": {
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
        "text": "Whether the drag element should be added to the container on drop. If set to false, the placeholder will be retained."
      },
      "attribute": "add-on-drop",
      "reflect": false,
      "defaultValue": "true"
    },
    "copy": {
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
        "text": "Whether the drag element should be moved or copied."
      },
      "attribute": "copy",
      "reflect": false,
      "defaultValue": "true"
    },
    "placeholderClass": {
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
        "text": "The class name for the drag/drop placeholder. Add space separated class names for multiple classes"
      },
      "attribute": "placeholder-class",
      "reflect": false,
      "defaultValue": "''"
    },
    "sortable": {
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
        "text": "Whether the list should be sortable."
      },
      "attribute": "sortable",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "fwDrop",
      "name": "fwDrop",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when an draggable item is dropped inside the container."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
