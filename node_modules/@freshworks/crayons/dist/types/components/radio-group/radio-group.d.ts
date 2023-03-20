import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @parent radio
 */
export declare class RadioGroup {
  private mutationO?;
  host: HTMLElement;
  private selectedIndex;
  private radios;
  /**
   * If true, a radio group can be saved without selecting any option. If an option is selected, the selection can be cleared. If the attribute’s value is undefined, the value is set to false.
   */
  allowEmpty: boolean;
  /**
   * Label for the component
   */
  label: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Indicates the direction of the radio buttons alignment, defaults to vertical alignment.
   */
  orientation: 'row' | 'column';
  /**
   * Default option that is selected when the radio group is displayed on the interface. Must be a valid value corresponding to the fw-radio components used in the Radio Group.
   */
  value?: any | null;
  /**
   * Specifies the input radio group as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
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
  /**
   * Theme based on which the radio group is styled.
   */
  state: 'normal' | 'warning' | 'error';
  hasHintTextSlot: boolean;
  hasWarningTextSlot: boolean;
  hasErrorTextSlot: boolean;
  valueChanged(): Promise<void>;
  /**
   * Triggered when an option in the Radio Group is selected or deselected.
   */
  fwChange: EventEmitter;
  handleKeydown(ev: KeyboardEvent): void;
  handleKeyup(event: KeyboardEvent): void;
  connectedCallback(): Promise<void>;
  componentDidLoad(): void;
  componentWillLoad(): void;
  checkSlotContent(): void;
  disconnectedCallback(): void;
  private updateRadios;
  private onSelect;
  private onDeselect;
  private getAriaDescribedBy;
  /**
   * Sets focus on a specific `fw-radio`.
   */
  setFocus(): Promise<void>;
  render(): any;
}
