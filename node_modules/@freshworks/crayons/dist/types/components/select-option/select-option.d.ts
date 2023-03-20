import { EventEmitter } from '../../stencil-public-runtime';
import { DropdownVariant } from '../../utils/types';
/**
 * @parent select
 */
export declare class SelectOption {
  host: HTMLElement;
  private rowContainer?;
  /**
   * Value corresponding to the option, that is saved  when the form data is saved.
   */
  value: string | number;
  /**
   * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
   */
  selected: boolean;
  /**
   * Sets the state of the option to disabled. The selected option is disabled and greyed out. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * States that the option is an HTML value. If the attribute's value is undefined, the value is set to true.
   */
  html: boolean;
  /**
   * Alternate text displayed on the interface, in place of the actual HTML content.
   */
  optionText: string;
  /**
   * HTML content that is displayed as the option.
   */
  htmlContent?: string;
  /**
   * Standard is the default option without any graphics other options are icon and avatar which places either the icon or avatar at the beginning of the row.
   * The props for the icon or avatar are passed as an object via the graphicsProps.
   */
  variant: DropdownVariant;
  /**
   * The text to be displayed in the option.
   */
  text: string;
  /**
   * Second line text can be description etc.
   */
  subText: string;
  /**
   * Used in grouped list, provides the group in which the option belongs
   */
  groupName: string;
  /**
   * The props for the graphics variant. ex., icon props in case of graphicsType = 'icon'
   */
  graphicsProps: any;
  /**
   * Place a checkbox.
   */
  checkbox: boolean;
  /**
   * Hide tick mark icon
   */
  hideTick: boolean;
  /**
   * Whether clicking on the already selected option disables it.
   */
  allowDeselect: boolean;
  /**
   * Whether clicking on option selects it.
   */
  allowSelect: boolean;
  /**
   * Triggered when an option is clicked when allowSelect is false.
   */
  fwSelectAttempted: EventEmitter;
  /**
   * Triggered when an option is selected.
   */
  fwSelected: EventEmitter;
  /**
   * Triggered when an option is focused.
   */
  fwFocus: EventEmitter;
  /**
   * Triggered when an option loses focus.
   */
  fwBlur: EventEmitter;
  setFocus(): Promise<any>;
  onKeyDown(ev: any): void;
  private onOptionSelected;
  renderInnerHtml(): any;
  createDescription(): any;
  createIcon(): any;
  createCheckbox(): any;
  createAvatar(): any;
  render(): any;
  componentDidLoad(): void;
}
