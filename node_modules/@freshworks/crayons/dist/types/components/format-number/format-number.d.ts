export declare class FormatNumber {
  /** Number to format. */
  value: number;
  /** `Locale` used for formatting the number */
  locale: string;
  /** Formatting style */
  type: 'currency' | 'decimal' | 'percent';
  /** Turns on/off grouping separators. */
  useGrouping: boolean;
  /** The currency to use in currency formatting.
   * Possible values are the `ISO 4217` currency codes, such as `USD` for the US dollar, `EUR` for the euro.
   * If the style is "currency", the currency property must be provided. */
  currency: string;
  /** Currency display formatting. */
  currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign.
   * You can enable the above by setting the currencySign option to `accounting`.
   * The default value is `standard`
   */
  currencySign: 'accounting' | 'standard';
  /** The minimum number of integer digits to use. Possible values are 1 - 21.
   * Default is 1
   */
  minimumIntegerDigits: number;
  /** The minimum number of fraction digits to use. Possible values are 0 - 20. */
  minimumFractionDigits: number;
  /** The maximum number of fraction digits to use. Possible values are 0 - 20. */
  maximumFractionDigits: number;
  /** The minimum number of significant digits to use. Possible values are 1 - 21.
   * Default is 1
   */
  minimumSignificantDigits: number;
  /** The maximum number of significant digits to use,. Possible values are 1 - 21.
   * Default is 21
   */
  maximumSignificantDigits: number;
  render(): string;
}
