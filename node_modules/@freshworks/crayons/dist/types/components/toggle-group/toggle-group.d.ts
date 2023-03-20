import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @parent toggle
 */
export declare class ToggleGroup {
  host: HTMLElement;
  private arrChildElements;
  private selectedIndex;
  private isInputFormatArray;
  /**
   * Boolean value to allow multiple selection or single child selection
   */
  multiple: boolean;
  /**
   * Selected items to be shown - stored in array format - if property "multiple" is set to false, this will always be a single value array
   */
  value: any;
  /**
   * Internal state of array items store the selected items
   */
  arrSelectedItems: string[];
  /**
   * Label for the component, that can be used by screen readers.
   */
  label: string;
  /**
   * Name of the component, saved as part of form data.
   */
  name: string;
  /**
   * Triggered when an option in the Toggle Group is selected or deselected.
   */
  fwChange: EventEmitter;
  setSelectedValues(values: string | string[]): Promise<void>;
  watchSelectedValuesChangeHandler(): void;
  keyupHandler(event: KeyboardEvent): void;
  toggleChangeHandler(event: CustomEvent): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private dispatchSelectionChangeEvent;
  private parseSelectedItems;
  private updateSelection;
  render(): any;
}
