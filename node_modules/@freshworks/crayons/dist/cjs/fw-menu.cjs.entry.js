'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');

const menuCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.menu{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:var(--fw-menu-min-width);max-width:var(--fw-menu-max-width);min-height:var(--fw-menu-min-height, 10px);max-height:var(--fw-menu-max-height, 400px);border:var(--fw-menu-border, 1px solid #ebeff3);border-radius:var(--fw-menu-border-radius);-webkit-box-shadow:var(--fw-menu-box-shadow);box-shadow:var(--fw-menu-box-shadow)}";

const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: 'menu', role: 'menu' }, index.h("slot", null)));
  }
};
Menu.style = menuCss;

exports.fw_menu = Menu;
