import { EventEmitter } from '../../stencil-public-runtime';
export declare class Checkbox {
  host: HTMLElement;
  /**
   * Sets the state of the check box to selected. If the attribute’s value is undefined, the value is set to false.
   */
  checked: boolean;
  /**
   * Disables the check box on the interface. If the attribute’s value is undefined, the value is set to false.
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
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Identifier corresponding to the component, that is saved when the form data is saved.
   */
  value: string;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Theme based on which the checkbox is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**

  /**
   * Hint text displayed below the radio group.
   */
  hintText: string;
  /**
   * Warning text displayed below the radio group.
   */
  warningText: string;
  /**
   * Error text displayed below the radio group.
   */
  errorText: string;
  hasHintTextSlot: boolean;
  hasWarningTextSlot: boolean;
  hasErrorTextSlot: boolean;
  /**
   * Triggered when the checkbox state is modified.
   */
  fwChange: EventEmitter;
  /**
   * Triggered when the check box comes into focus.
   */
  fwFocus: EventEmitter<void>;
  /**
   * Triggered when the check box loses focus.
   */
  fwBlur: EventEmitter;
  private checkbox;
  componentDidLoad(): void;
  checkChanged(isChecked: boolean): void;
  componentWillLoad(): void;
  checkSlotContent(): void;
  /**
   * Sets focus on a `fw-checkbox`.
   */
  setFocus(): Promise<void>;
  disabledChanged(isDisabled: boolean): void;
  handleKeydown(ev: KeyboardEvent): void;
  handleKeyup(ev: KeyboardEvent): void;
  private onFocus;
  private onBlur;
  private toggle;
  getAriaDescribedBy(): string;
  render(): any;
}
