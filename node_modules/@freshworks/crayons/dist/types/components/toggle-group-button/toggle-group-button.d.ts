import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @parent toggle
 */
export declare class ToggleGroupButton {
  private button;
  host: HTMLElement;
  /**
   * Sets the state to selected. If the attribute’s value is undefined, the value is set to false.
   */
  selected: boolean;
  /**
   * Disables the component on the interface. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * sets the default base class name and the rest of the class names for the other states are automatically appended to this
   */
  baseClassName: string;
  /**
   * sets the type of the button
   */
  type: 'card' | 'icon' | 'custom';
  /**
   * Enables the component to be used as a toggle button or just to be used as a normal button
   */
  selectable: boolean;
  /**
   * Enables the component to be used as a part of multi selection group
   */
  isCheckbox: boolean;
  /**
   * index attached inside the parent group component
   */
  index: number;
  /**
   * Identifier corresponding to the component, that is saved when the form data is saved.
   */
  value: string;
  /**
   * Label displayed as header in the card.
   */
  header: string;
  /**
   * Label displayed as description in the card.
   */
  description: string;
  /**
   * Name of the component, saved as part of the form data.
   */
  name: string;
  /**
   * Triggered when the card in focus is selected.
   */
  fwToggled: EventEmitter;
  /**
   * Public method exposed to set the focus for the button component - to be used for accessibility
   */
  setFocus(): Promise<void>;
  listenClickHandler(event: MouseEvent): void;
  componentWillLoad(): void;
  private getClassName;
  render(): any;
}
