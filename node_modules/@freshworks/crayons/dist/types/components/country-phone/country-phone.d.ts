import { EventEmitter } from '../../stencil-public-runtime';
import { CountryCode } from 'libphonenumber-js/types';
export declare class CountryPhone {
  host: HTMLElement;
  /**
   * Phone input
   */
  phoneNumber: string;
  /**
   * Helps to stop unwanted rendering when value is updated from inside the component
   */
  private isValueUpdatedFromInside;
  /**
   * Country 2l code use to extract country details when provided with phonecode and phone number
   */
  countryCode: CountryCode;
  /**
   * Country Name
   */
  countryName: string;
  /**
   * Disable phone number input when invalid phone number or empty string is provided
   */
  disablePhoneInput: boolean;
  /**
   * Country phone code
   */
  phoneCode: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Displays a right-justified clear icon in the text box. Clicking the icon clears the input text. If the attribute’s value is undefined, the value is set to false. For a read-only input box, the clear icon is not displayed unless a default value is specified for the input box.
   */
  clearInput: boolean;
  /**
   * Hide Country Name in the Country Select
   */
  hideCountryName: boolean;
  /**
   * Hide Country Flag in the Country Select
   */
  hideCountryFlag: boolean;
  /**
   * Text displayed in the text box before a user enters a value.
   */
  selectPlaceholder?: string | null;
  /**
   * Text displayed in the text box before a user enters a value.
   */
  inputPlaceholder?: string | null;
  /**
   *  * Label displayed on the interface, for the input component.
   */
  inputLabel?: string | null;
  /**
   *  * Label displayed on the interface, for the input component.
   */
  selectLabel?: string | null;
  /**
   * If true, the user cannot enter a value in the input box. If the attribute’s value is undefined, the value is set to false.
   */
  readonly: boolean;
  /**
   * Specifies the input box as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  required: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
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
   *
   * Theme based on which the text box is styled.
   */
  state: 'normal' | 'warning' | 'error';
  /**
   * Default value displayed in the input box & select dropdown after extracting valid phone number
   */
  value?: string | null;
  /**
   * Triggered when phone element is input.
   */
  fwInput: EventEmitter;
  /**
   * Triggered when phone element is blur.
   */
  fwBlur: EventEmitter;
  /**
   * Triggered when clear icon is clicked.
   */
  fwInputClear: EventEmitter;
  /**
   * Triggered when input is focused.
   */
  fwFocus: EventEmitter;
  /**
   * Checks PhoneNumber is Valid or Not
   *
   * @param { string } value PhoneNumber
   * @param {CountryCode} countryCode
   * @returns { boolean } after validation PhoneNumber with countryCode
   * */
  isValidPhoneNumber(value: string, countryCode: CountryCode): Promise<boolean>;
  /**
   * Validates PhoneNumber provided and return extra details
   *
   * @param { string } value PhoneNumber
   * @returns { Object } {countryCode, countryCallingCode, nationalNumber,  number, metadata }
   * */
  parsePhoneNumber(...args: any[]): Promise<any>;
  watchPhoneDetails(newValue: any, oldValue: any): void;
  componentWillLoad(): void;
  private getSingleFormat;
  private updateValue;
  private setPhoneNumberDetails;
  private getMeta;
  private onInputBlur;
  private onInput;
  private onInputClear;
  private onInputFocus;
  private getCountryDetails;
  private getCountryName;
  private onSelectChange;
  render(): any;
}
