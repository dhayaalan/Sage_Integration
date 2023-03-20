'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');

const buttonGroupCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}";

const ButtonGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = '';
  }
  componentDidLoad() {
    this.handleSlotChange();
  }
  handleSlotChange() {
    if (!this.host)
      return;
    const slottedElements = this.host.querySelectorAll('fw-button');
    slottedElements.forEach((button, index) => {
      button.classList.add('fw-button-group__button');
      button.classList.toggle('fw-button-group__button--first', index === 0);
      button.classList.toggle('fw-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
      button.classList.toggle('fw-button-group__button--last', index === slottedElements.length - 1);
    });
  }
  render() {
    return (index.h(index.Host, { "aria-label": this.label }, index.h("slot", { onSlotchange: () => this.handleSlotChange() })));
  }
  get host() { return index.getElement(this); }
};
ButtonGroup.style = buttonGroupCss;

exports.fw_button_group = ButtonGroup;
