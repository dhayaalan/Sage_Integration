/**
 * @parent menu
 */
export declare class MenuItem {
  el: HTMLElement;
  /**
   * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
   */
  selected: boolean;
  /**
   * Sets the state of the option to selected. The selected option is highlighted and a check mark is displayed next to it. If the attribute’s value is undefined, the value is set to false.
   */
  selectable: boolean;
  toggleSelect(): void;
  render(): any;
}
