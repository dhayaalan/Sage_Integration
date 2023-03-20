import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @parent tab
 */
export declare class Tabs {
  el: HTMLElement;
  private tabsMutation?;
  private tabMutation?;
  private activeTab;
  private tabs;
  private panels;
  /**
   * Describes the purpose of set of tabs.
   */
  label: string;
  /**
   * The index of the tab to be activated (Starts from 0)
   */
  activeTabIndex: number;
  /**
   * The name of the tab to be activated. If present, will be taken as priority over `activeTabIndex`.
   */
  activeTabName?: string;
  /**
   * The style of tab headers that needs to be displayed, box will display headers in a container.
   */
  variant: 'box' | 'normal';
  /**
   * Triggered when a the view switches to a new tab.
   */
  fwChange: EventEmitter;
  private syncTabsAndPanels;
  init(): void;
  createPanelIfRequired(): void;
  assignAriaLabels(): void;
  /**
   * Activates the tab based based on tabindex or name.
   */
  activateTab(index?: number, name?: string): Promise<void>;
  setActiveTab(tab: any, shouldEmit?: boolean): void;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  getActiveTab(): any;
  handleClick(event: MouseEvent): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleKeyUp(e: KeyboardEvent): void;
  render(): any;
}
