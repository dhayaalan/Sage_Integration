import { EventEmitter } from '../../stencil-public-runtime';
export declare class Button {
  host: HTMLElement;
  private handleClickWithThrottle;
  private button;
  /**
   *  Button type based on which actions are performed when the button is clicked.
   */
  type: 'button' | 'submit';
  /**
   * Identifier of  the theme based on which the button is styled.
   */
  color: 'primary' | 'secondary' | 'danger' | 'link' | 'text';
  /**
   * Size of the button.
   */
  size: 'normal' | 'small' | 'icon' | 'icon-small';
  /**
   * Disables the button on the interface. Default value is false.
   */
  disabled: boolean;
  /**
   * Loading state for the button, Default value is false.
   */
  loading: boolean;
  /**
   * Caret indicator for the button, Default value is false.
   */
  showCaretIcon: boolean;
  /**
   *  Accepts the id of the fw-modal component to open it on click.
   */
  modalTriggerId: string;
  /**
   * Accepts the id of the fw-file-uploader component to upload the file.
   */
  fileUploaderId: string;
  /**
   * Sets the delay for throttle in milliseconds. Defaults to 200 milliseconds.
   */
  throttleDelay: number;
  /**
   * Triggered when the button is clicked.
   */
  fwClick: EventEmitter<void>;
  /**
   * Triggered when the button comes into focus.
   */
  fwFocus: EventEmitter<void>;
  /**
   * Triggered when the button loses focus.
   */
  fwBlur: EventEmitter<void>;
  private hasLabel;
  private hasBeforeLabel;
  private hasAfterLabel;
  setFocus(): Promise<any>;
  private onFocus;
  private onBlur;
  connectedCallback(): void;
  private handlePreventDefault;
  private handleClick;
  private fileSubmit;
  private modalTrigger;
  private fakeSubmit;
  componentWillLoad(): void;
  private handleSlotChange;
  render(): any;
}
