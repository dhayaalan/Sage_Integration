import { Component, Prop, h, Host, Event, Method, Watch, } from '@stencil/core';
import { TranslationController } from '../../global/Translation';
export class Pagination {
  constructor() {
    /**
     * The current page number.
     */
    this.page = 1;
    /**
     *The number of records to be shown per page. Defaults to 10.
     */
    this.perPage = 10;
    /**
     * Aria Label to be used for the button group.
     */
    // @i18n({ keyName: 'pagination.buttonGroupLabel' })
    this.buttonGroupLabel = '';
    /**
     * Aria Label to be used for previous button.
     */
    // @i18n({ keyName: 'pagination.previousButtonLabel' })
    this.previousButtonLabel = '';
    /**
     * Aria Label to be used for next button.
     */
    // @i18n({ keyName: 'pagination.nextButtonLabel' })
    this.nextButtonLabel = '';
    /**
     * Indicates if the records in current page are being fetched.
     */
    this.isLoading = false;
  }
  /**
   * Navigates to previous set of records if available.
   */
  async previousPage() {
    this.goToPrevious();
  }
  /**
   * Navigates to next set of records if available.
   */
  async nextPage() {
    this.goToNext();
  }
  getLastPage() {
    return Math.ceil(this.total / this.perPage);
  }
  getStartRecord() {
    return Math.max((this.page - 1) * this.perPage + 1, 1);
  }
  getEndRecord() {
    return Math.min(this.start + this.perPage - 1, this.total);
  }
  handlePage(page) {
    if (page > this.getLastPage())
      return;
    this.start = this.getStartRecord();
    this.end = this.getEndRecord();
  }
  handleTotal() {
    this.end = this.getEndRecord();
  }
  componentWillLoad() {
    this.page = Math.min(this.page, this.getLastPage());
    this.start = this.getStartRecord();
    this.end = this.getEndRecord();
  }
  goToPrevious() {
    this.page = Math.max(1, this.page - 1);
    this.fwChange.emit({
      page: this.page,
    });
  }
  goToNext() {
    this.page = Math.min(this.getLastPage(), this.page + 1);
    this.fwChange.emit({
      page: this.page,
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: 'current-record', innerHTML: TranslationController.t('pagination.content', {
          start: this.start,
          end: this.end,
          total: this.total,
        }) }),
      h("fw-button-group", { label: this.buttonGroupLabel ||
          TranslationController.t('pagination.buttonGroupLabel') },
        h("fw-button", { disabled: this.start === 1 || this.isLoading, color: 'secondary', size: 'icon', "aria-label": this.previousButtonLabel ||
            TranslationController.t('pagination.previousButtonLabel'), onFwClick: () => this.goToPrevious() },
          h("fw-icon", { name: 'chevron-left' })),
        h("fw-button", { disabled: this.end === this.total || this.isLoading, color: 'secondary', size: 'icon', "aria-label": this.nextButtonLabel ||
            TranslationController.t('pagination.nextButtonLabel'), onFwClick: () => this.goToNext() },
          h("fw-icon", { name: 'chevron-right' })))));
  }
  static get is() { return "fw-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["pagination.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get properties() { return {
    "page": {
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
        "text": "The current page number."
      },
      "attribute": "page",
      "reflect": false,
      "defaultValue": "1"
    },
    "total": {
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
        "text": "The total number of records. This is a mandatory parameter."
      },
      "attribute": "total",
      "reflect": false
    },
    "perPage": {
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
        "text": "The number of records to be shown per page. Defaults to 10."
      },
      "attribute": "per-page",
      "reflect": false,
      "defaultValue": "10"
    },
    "buttonGroupLabel": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria Label to be used for the button group."
      },
      "attribute": "button-group-label",
      "reflect": false,
      "defaultValue": "''"
    },
    "previousButtonLabel": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria Label to be used for previous button."
      },
      "attribute": "previous-button-label",
      "reflect": false,
      "defaultValue": "''"
    },
    "nextButtonLabel": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria Label to be used for next button."
      },
      "attribute": "next-button-label",
      "reflect": false,
      "defaultValue": "''"
    },
    "isLoading": {
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
        "text": "Indicates if the records in current page are being fetched."
      },
      "attribute": "is-loading",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Triggered when either previous or next button is clicked."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "previousPage": {
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
        "text": "Navigates to previous set of records if available.",
        "tags": []
      }
    },
    "nextPage": {
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
        "text": "Navigates to next set of records if available.",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "page",
      "methodName": "handlePage"
    }, {
      "propName": "total",
      "methodName": "handleTotal"
    }]; }
}
