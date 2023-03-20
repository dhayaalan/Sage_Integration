export declare class CustomCellParagraph {
  /**
   * To get access to the host element
   */
  el: HTMLElement;
  /**
   * text to display inside the cell
   */
  text: string;
  /** max height to restrict trimming. 60px to allow for 3 lines (3 * 20 line-height) */
  maxHeight: string;
  /**
   * hide and show toggle button state based on how long the text is
   */
  showToggle: boolean;
  /**
   * hide and show text
   */
  hide: boolean;
  /**
   * toggle paragraph button
   */
  toggleParaButton: HTMLElement;
  textChangeHandler(): void;
  /**
   * componentDidLoad lifecycle event
   */
  componentDidLoad(): void;
  /** on focusing of the para variant */
  onFocus(): void;
  /**
   * showToggleOnTextChange show the button based on number of lines in the paragraph
   */
  showToggleOnTextChange(): void;
  /**
   * toggleParagraph show and hide the longer paragraph text
   */
  toggleParagraph(): void;
  /**
   * render method
   */
  render(): any;
}
