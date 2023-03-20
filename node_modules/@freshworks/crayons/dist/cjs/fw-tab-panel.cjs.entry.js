'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');

const tabPanelCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;padding:0;width:var(--fw-tab-panel-width, \"inherit\");height:var(--fw-tab-panel-height, \"inherit\")}";

let counter = 0;
const Panel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The panel name.
     */
    this.name = '';
    /**
     * If true sets the panel display to block, none otherwise.
     */
    this.active = false;
  }
  connectedCallback() {
    if (!this.el.id) {
      this.el.id = `fw-tab-panel-${counter++}`;
    }
  }
  render() {
    this.el.style.display = this.active ? 'block' : 'none';
    return (index.h(index.Host, { role: 'tabpanel', "aria-hidden": this.active ? 'false' : 'true' }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
Panel.style = tabPanelCss;

exports.fw_tab_panel = Panel;
