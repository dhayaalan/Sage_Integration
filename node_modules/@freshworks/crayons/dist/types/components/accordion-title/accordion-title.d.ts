/// <reference types="react" />
/**
 * @parent accordion
 */
export declare class AccordionTitle {
  el: HTMLFwAccordionTitleElement;
  /**
   * @internal
   */
  toggleState: any;
  /**
   * @internal
   */
  expanded: boolean;
  /**
   * @internal
   */
  type: 'default' | 'no_bounding_box';
  /**
   * Truncate title on text overflow
   */
  truncateOnOverflow: boolean;
  /**
   * The size of the default icon
   */
  iconSize: 'small' | 'medium' | 'large';
  expandedIcon: HTMLElement;
  collapsedIcon: HTMLElement;
  componentWillLoad(): void;
  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render(): JSX.Element;
}
