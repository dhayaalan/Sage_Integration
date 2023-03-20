'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-63c6a574.js');
const index$1 = require('./index-926a762d.js');

const accordionTitleCss = ":host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", roboto, oxygen, ubuntu, cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.accordion-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:var(--fw-accordion-title-background-color, #ffffff);border:var(--fw-accordion-title-border, none);border-end-start-radius:0;border-end-end-radius:0;border-start-end-radius:var(--fw-accordion-border-radius, 8px);border-start-start-radius:var(--fw-accordion-border-radius, 8px);padding-inline:20px;padding-block:10px;cursor:pointer}.accordion-header.collapsed{border-radius:var(--fw-accordion-border-radius, 8px)}.accordion-header.collapsed .accordion-icon{--fw-icon-color:var(\n    --fw-accordion-title-collapsed-icon-color,\n    $accordion-title-icon-color\n  )}.accordion-header.no-bounding-box{border-radius:0}.accordion-header .accordion-title{-ms-flex-positive:1;flex-grow:1;line-height:var(--fw-accordion-title-line-height, 19px);font-size:var(--fw-accordion-title-font-size, 16px);font-weight:var(--fw-accordion-title-font-weight, bold)}.accordion-header .accordion-title.truncate{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.accordion-header .accordion-icon{-ms-flex-positive:0;flex-grow:0;--fw-icon-color:var(\n    --fw-accordion-title-expanded-icon-color,\n    $accordion-title-icon-color\n  )}";

const ChevronArrow = ({ expanded, iconSize }) => {
  let size;
  switch (iconSize) {
    case 'small':
      size = 7;
      break;
    case 'medium':
      size = 10;
      break;
    case 'large':
      size = 14;
      break;
  }
  const direction = expanded ? 'up' : 'down';
  return (index.h("fw-icon", { class: 'accordion-icon', name: `chevron-${direction}`, size: size, library: 'system' }));
};
const AccordionTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.toggleState = () => { };
    /**
     * @internal
     */
    this.expanded = true;
    /**
     * @internal
     */
    this.type = 'default';
    /**
     * Truncate title on text overflow
     */
    this.truncateOnOverflow = true;
    /**
     * The size of the default icon
     */
    this.iconSize = 'medium';
  }
  componentWillLoad() {
    this.expandedIcon = this.el.querySelector('[slot="expanded-icon"');
    this.collapsedIcon = this.el.querySelector('[slot="collapsed-icon"');
  }
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render() {
    return (index.h("div", { class: {
        'accordion-header': true,
        'collapsed': !this.expanded,
        'no-bounding-box': this.type === 'no_bounding_box',
      }, role: 'button', tabindex: '0', onKeyDown: index$1.handleKeyDown(this.toggleState), onClick: this.toggleState, "aria-expanded": this.expanded.toString() }, index.h("div", { class: {
        'accordion-title': true,
        'truncate': this.truncateOnOverflow,
      } }, index.h("slot", null)), this.expandedIcon && this.collapsedIcon ? (index.h("div", { class: 'accordion-icon' }, index.h("slot", { name: this.expanded ? 'expanded-icon' : 'collapsed-icon' }))) : (index.h(ChevronArrow, { expanded: this.expanded, iconSize: this.iconSize }))));
  }
  get el() { return index.getElement(this); }
};
AccordionTitle.style = accordionTitleCss;

exports.fw_accordion_title = AccordionTitle;
