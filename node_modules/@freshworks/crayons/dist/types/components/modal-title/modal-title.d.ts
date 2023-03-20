/// <reference types="react" />
/**
 * @parent modal
 */
export declare class ModalTitle {
  el: HTMLElement;
  /**
   * The title text to be displayed on the modal
   */
  titleText: string;
  /**
   * The title text to be displayed on the modal
   */
  description: string;
  /**
   * The icon to be displayed with the title
   */
  icon: string;
  /**
   * Set to true if we want to render slot instead of default footer
   */
  custom: any;
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad(): void;
  /**
   * renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon(): JSX.Element;
  /**
   * renders slot content when custom attribute is passed, else displays the default
   * icon, title and description with close button in the header.
   * @returns {JSX.Element}
   */
  render(): JSX.Element;
}
