import { EventEmitter } from '../../stencil-public-runtime';
export declare class Radio {
  host: HTMLElement;
  /**
   * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
   */
  checked: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Description to be displayed for the checkbox.
   */
  description: string;
  /**
   * @deprecated Use `description` instead.
   * Label displayed on the interface, for the check box.
   */
  label: string;
  /**
   * Identifier corresponding to the component, that is saved when the form data is saved.
   */
  value: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Theme based on which the radio button is styled.
   */
  state: 'normal' | 'error';
  /**

  /**
   * Triggered when the radio button in focus is selected.
   */
  fwSelect: EventEmitter;
  /**
   * Triggered when the radio button in focus is cleared.
   */
  fwDeselect: EventEmitter;
  /**
   * Triggered when the radio button comes into focus.
   */
  fwFocus: EventEmitter<void>;
  /**
   * Triggered when the radio button loses focus.
   */
  fwBlur: EventEmitter;
  /**
   * Triggered when the radio button is toggled.
   */
  fwChange: EventEmitter;
  private radio;
  componentDidLoad(): void;
  checkChanged(isChecked: boolean): void;
  disabledChanged(isDisabled: boolean): void;
  private onFocus;
  private onBlur;
  private toggle;
  /**
   * Sets focus on a specific `fw-radio`.
   */
  setFocus(): Promise<void>;
  render(): any;
}
