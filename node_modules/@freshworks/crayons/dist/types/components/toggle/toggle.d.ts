import { EventEmitter } from '../../stencil-public-runtime';
export declare class Toggle {
  host: HTMLElement;
  /**
   * Sets the selected state as the default state. If the attribute’s value is undefined, the value is set to false.
   */
  checked: boolean;
  /**
   * Size of the input control.
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Name of the component, saved as part of the form data.
   */
  name: string;
  /**
   * Specifies whether to disable the control on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Specifies whether to show the check and cancel icons on toggle button. If the attribute’s value is undefined, the value is set to true.
   */
  showIcon: boolean;
  /**
   * Label for the component, that can be used by screen readers.
   */
  label: string;
  /**
   * Triggered when the input control is selected or deselected.
   */
  fwChange: EventEmitter;
  handleKeyUp(ev: KeyboardEvent): void;
  handleKeyDown(ev: KeyboardEvent): void;
  watchHandler(newValue: boolean): void;
  connectedCallback(): void;
  private toggle;
  render(): any;
}
