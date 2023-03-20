import { Component, Prop, Event, h } from '@stencil/core';
import { TranslationController } from '../../../global/Translation';
export class FileUploaderFile {
  constructor() {
    /**
     * file Id
     */
    this.fileId = null;
    /**
     * file name
     */
    this.name = '';
  }
  /**
   * private
   * remove
   */
  remove() {
    this.fwRemoveFile.emit({
      fileId: this.fileId,
    });
  }
  /**
   * render
   * @returns {JSX.Element}
   */
  render() {
    /* eslint-disable-next-line */
    return (h("div", { class: 'files-content' },
      h("div", { class: 'files-content-icon' },
        h("fw-icon", { name: 'checkbox', size: 14, color: '#00a886' })),
      h("div", { class: 'files-content-file' },
        h("span", { class: 'files-content-file-name' }, this.name),
        h("button", { class: 'files-content-file-remove', onClick: () => this.remove() }, TranslationController.t('fileUploader.remove')))));
  }
  static get is() { return "fw-file-uploader-file"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["file-uploader-file.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["file-uploader-file.css"]
  }; }
  static get properties() { return {
    "fileId": {
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
        "text": "file Id"
      },
      "attribute": "file-id",
      "reflect": false,
      "defaultValue": "null"
    },
    "name": {
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
        "text": "file name"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get events() { return [{
      "method": "fwRemoveFile",
      "name": "fwRemoveFile",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "removeFile - event that gets triggered on file removal"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
