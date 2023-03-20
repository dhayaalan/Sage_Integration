import { Component, h } from '@stencil/core';
export class Menu {
  render() {
    return (h("div", { class: 'menu', role: 'menu' },
      h("slot", null)));
  }
  static get is() { return "fw-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu.css"]
  }; }
}
