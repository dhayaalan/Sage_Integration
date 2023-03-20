import { Component, Element, State, h, Host, Prop } from '@stencil/core';
export class DragItem {
  constructor() {
    this.draggable = false;
    /**
     * Whether the drag is disabled or not.
     */
    this.disabled = false;
    /**
     * Whether the drag icon should be visible.
     */
    this.showDragIcon = true;
  }
  componentDidLoad() {
    var _a, _b;
    if (this.pinned)
      return;
    (_a = this.dragIcon) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', this.toggleDraggable.bind(this));
    (_b = this.dragIcon) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseout', this.toggleDraggable.bind(this));
  }
  toggleDraggable() {
    this.draggable = !this.draggable;
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.dragIcon) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousedown', this.toggleDraggable);
    (_b = this.dragIcon) === null || _b === void 0 ? void 0 : _b.removeEventListener('mouseout', this.toggleDraggable);
  }
  render() {
    return (h(Host, { draggable: this.draggable },
      h("div", { class: {
          'drag-item': true,
        }, draggable: this.draggable },
        this.showDragIcon && (h("span", { class: 'drag-item__prefix' },
          h("fw-icon", { class: { 'drag-icon': true, 'drag': !this.pinned }, name: !this.pinned ? 'drag' : 'lock', ref: (dragIcon) => (this.dragIcon = dragIcon) }))),
        h("span", { class: 'drag-item__label' },
          h("slot", null)),
        h("span", { class: 'drag-item__suffix' },
          h("slot", { name: 'suffix' })))));
  }
  static get is() { return "fw-drag-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["drag-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["drag-item.css"]
  }; }
  static get properties() { return {
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
        "text": "Whether the drag is disabled or not."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "showDragIcon": {
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
        "text": "Whether the drag icon should be visible."
      },
      "attribute": "show-drag-icon",
      "reflect": false,
      "defaultValue": "true"
    },
    "pinned": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'bottom'",
        "resolved": "\"bottom\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pinned position of the drag item, other drag item cannot be placed above or below it."
      },
      "attribute": "pinned",
      "reflect": false
    }
  }; }
  static get states() { return {
    "draggable": {}
  }; }
  static get elementRef() { return "el"; }
}
