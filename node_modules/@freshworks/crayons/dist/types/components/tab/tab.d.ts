export declare class Tab {
  el: HTMLElement;
  /**
   * Unique name of the tab.
   */
  tabName: string;
  /**
   * Header for the tab to be displayed.
   */
  tabHeader: string;
  /**
   * Disables this tab
   */
  disabled: boolean;
  /**
   * Determines whether the tab is active.
   */
  active: boolean;
  /**
   * The name of the tab panel which this tab controls.
   */
  panel: string;
  connectedCallback(): void;
  render(): any;
}
