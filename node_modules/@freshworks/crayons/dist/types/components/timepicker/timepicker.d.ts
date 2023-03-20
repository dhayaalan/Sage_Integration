import { Event, EventEmitter } from '../../stencil-public-runtime';
import { PopoverPlacementType } from '../../utils/types';
export declare class Timepicker {
  host: HTMLElement;
  /**
   * State for all the time values
   */
  timeValues: any[];
  langModule: any;
  /**
   * Format in which time values are populated in the list box. If the value is hh:mm a, the time values are in the 12-hour format. If the value is hh:mm, the time values are in the 24-hr format.
   * The default value will be set based on the locale time format.
   */
  format: string;
  /**
   * Set true to disable the element
   */
  disabled: boolean;
  /**
   * The Time value. The value is always in the non meridian format i.e., HH:mm
   */
  value?: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Time interval between the values displayed in the list, specified in minutes.
   */
  interval: number;
  /**
   * Lower time-limit for the values displayed in the list. The default value will be set based on the locale time format.
   */
  minTime?: string;
  /**
   * Upper time-limit for the values displayed in the list. The default value will be set based on the locale time format.
   */
  maxTime?: string;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute's value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Theme based on which the input of the timepicker is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * Hint text displayed below the text box.
   */
  hintText: string;
  /**
   * Warning text displayed below the text box.
   */
  warningText: string;
  /**
   * Error text displayed below the text box.
   */
  errorText: string;
  /**
   * Label displayed on the interface, for the component.
   */
  label: string;
  /**
   * Text displayed in the select before an option is selected.
   */
  placeholder?: string | null;
  /**
   * Placement of the options list with respect to timepicker.
   */
  optionsPlacement: PopoverPlacementType;
  /**
   * Whether the arrow/caret should be shown in the timepicker.
   */
  caret: boolean;
  /**
   *   Locale for which timePicker needs to be shown. Defaults to browser's current locale.
   */
  locale: string;
  /**
   * Whether the dropdown should be same width as that of the input.
   */
  sameWidth: boolean;
  /**
   * Whether clicking on the already selected option disables it.
   */
  allowDeselect: boolean;
  /**
   * If true, the user cannot type in the text input
   */
  readonly: boolean;
  /**
   * Triggered when a value is selected or deselected from the list box options.
   */
  fwChange: EventEmitter;
  /**
   * Triggered when the list box loses focus.
   */
  fwBlur: EventEmitter;
  /**
   * Triggered when the list box comes into focus.
   */
  fwFocus: EventEmitter;
  private nativeInput;
  private getTimeOptionsMeta;
  private setTimeValues;
  private currentTimeLabel;
  private currentTimeValue;
  private setTimeValue;
  /**
   * Sets focus on a specific `fw-timepicker`.
   */
  setFocus(): Promise<void>;
  handleLocaleChange(newLocale: any): Promise<void>;
  onBlur: (e: Event) => void;
  onFocus: () => void;
  componentWillLoad(): Promise<void>;
  render(): any;
}
