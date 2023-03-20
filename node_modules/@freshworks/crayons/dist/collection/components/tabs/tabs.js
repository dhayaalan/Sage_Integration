import { Component, Element, Event, h, Listen, Prop, Method, } from '@stencil/core';
/**
 * @parent tab
 */
export class Tabs {
  constructor() {
    /**
     * Describes the purpose of set of tabs.
     */
    this.label = '';
    /**
     * The index of the tab to be activated (Starts from 0)
     */
    this.activeTabIndex = 0;
    /**
     * The style of tab headers that needs to be displayed, box will display headers in a container.
     */
    this.variant = 'normal';
  }
  syncTabsAndPanels() {
    this.tabs = Array.from(this.el.querySelectorAll('fw-tab')).filter((tab) => !tab.disabled);
    this.panels = Array.from(this.el.querySelectorAll('fw-tab-panel'));
  }
  init() {
    this.syncTabsAndPanels();
    // Assign aria attributes
    this.assignAriaLabels();
    // set active tab
    this.setActiveTab(this.getActiveTab() || this.tabs[0], false);
  }
  createPanelIfRequired() {
    let counter = 0;
    this.tabs = Array.from(this.el.querySelectorAll('fw-tab'));
    this.tabs.map((tab) => {
      if (tab.tabHeader) {
        tab.setAttribute('panel', `panel-${counter++}`);
        tab.setAttribute('slot', 'tab');
        const panel = document.createElement('fw-tab-panel');
        panel.innerHTML = tab.innerHTML;
        panel.setAttribute('id', `fw-tab-panel-${counter++}`);
        panel.setAttribute('name', tab.getAttribute('panel') || tab.panel);
        this.el.appendChild(panel);
      }
    });
  }
  assignAriaLabels() {
    Array.from(this.el.querySelectorAll('fw-tab')).map((tab) => {
      const panel = this.panels.find((p) => p.name === tab.getAttribute('panel') || tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id'));
        panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
      }
    });
  }
  /**
   * Activates the tab based based on tabindex or name.
   */
  async activateTab(index, name) {
    (index || index === 0) && (this.activeTabIndex = index);
    name && (this.activeTabName = name);
    this.setActiveTab(this.getActiveTab(), false);
  }
  setActiveTab(tab, shouldEmit = true) {
    if (tab && tab !== this.activeTab && !tab.disabled) {
      this.activeTab = tab;
      this.activeTabIndex = this.tabs.indexOf(tab);
      this.activeTabName = tab.activeTabName;
      // Sync active tab and panel
      this.tabs.map((el) => (el.active = el === this.activeTab));
      const activePanel = this.activeTab.getAttribute('panel') || this.activeTab.panel;
      this.panels.map((el) => (el.active = el.name === activePanel));
      // Emit events
      if (shouldEmit) {
        this.fwChange.emit({
          tabIndex: this.activeTabIndex,
          tabName: this.activeTab.id,
        });
      }
    }
  }
  componentWillLoad() {
    this.init();
  }
  connectedCallback() {
    // Create fw-tab-panel component explictly if tab-header attribute is present.
    this.createPanelIfRequired();
    this.tabsMutation = new MutationObserver(() => {
      this.init();
    });
    this.tabMutation = new MutationObserver((mutations) => {
      if (mutations.some((m) => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });
    this.tabsMutation.observe(this.el, {
      childList: true,
      attributes: true,
    });
    Array.from(this.el.querySelectorAll('fw-tab')).forEach((tab) => {
      this.tabMutation.observe(tab, {
        attributes: true,
      });
    });
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.tabsMutation) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.tabMutation) === null || _b === void 0 ? void 0 : _b.disconnect();
    this.tabsMutation = undefined;
    this.tabMutation = undefined;
  }
  getActiveTab() {
    return (this.tabs.find((tab) => tab.id === this.activeTabName) ||
      ((this.activeTabIndex || this.activeTabIndex === 0) &&
        this.tabs[this.activeTabIndex]) ||
      this.tabs.find((tab) => tab.id === tab.active));
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest('fw-tab');
    const tabs = tab === null || tab === void 0 ? void 0 : tab.closest('fw-tabs');
    if (tabs !== this.el) {
      return;
    }
    if (tab) {
      this.setActiveTab(tab);
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest('fw-tab');
    const tabs = tab === null || tab === void 0 ? void 0 : tab.closest('fw-tabs');
    if (tabs !== this.el) {
      return;
    }
    switch (event.code) {
      case 'ArrowDown':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault();
        break;
    }
  }
  handleKeyUp(e) {
    const target = e.target;
    const tab = target.closest('fw-tab');
    const tabs = tab === null || tab === void 0 ? void 0 : tab.closest('fw-tabs');
    if (tabs !== this.el) {
      return;
    }
    if (this.activeTabIndex !== undefined) {
      let index = this.activeTabIndex;
      switch (e.code) {
        case 'ArrowLeft':
        case 'ArrowUp':
          index = (index - 1 + this.tabs.length) % this.tabs.length;
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          index = (index + 1) % this.tabs.length;
          break;
        default:
          return;
      }
      this.tabs[index].focus();
      this.setActiveTab(this.tabs[index]);
    }
  }
  render() {
    return (h("div", { class: 'tabs' },
      h("div", { class: 'tabs__items__nav' + (this.variant === 'box' ? '__box' : '') },
        h("div", { class: 'tabs__items__tabs', role: 'tablist', "aria-label": this.label },
          h("slot", { name: 'tab' }))),
      h("slot", null)));
  }
  static get is() { return "fw-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tabs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tabs.css"]
  }; }
  static get properties() { return {
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
        "text": "Describes the purpose of set of tabs."
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "activeTabIndex": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The index of the tab to be activated (Starts from 0)"
      },
      "attribute": "active-tab-index",
      "reflect": true,
      "defaultValue": "0"
    },
    "activeTabName": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The name of the tab to be activated. If present, will be taken as priority over `activeTabIndex`."
      },
      "attribute": "active-tab-name",
      "reflect": true
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'box' | 'normal'",
        "resolved": "\"box\" | \"normal\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The style of tab headers that needs to be displayed, box will display headers in a container."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'normal'"
    }
  }; }
  static get events() { return [{
      "method": "fwChange",
      "name": "fwChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Triggered when a the view switches to a new tab."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "activateTab": {
      "complexType": {
        "signature": "(index?: number, name?: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
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
        "text": "Activates the tab based based on tabindex or name.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "handleKeyUp",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
