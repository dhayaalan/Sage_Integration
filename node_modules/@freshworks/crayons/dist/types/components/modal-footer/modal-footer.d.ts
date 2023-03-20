/// <reference types="react" />
/**
 * @parent modal
 */
export declare class ModalFooter {
  el: HTMLElement;
  /**
   * The text for the submit button
   */
  submitText: string;
  /**
   * The text for the cancel button
   */
  cancelText: string;
  /**
   * Default state of submit button
   */
  submitDisabled: boolean;
  /**
   * The color of submit button
   */
  submitColor: 'primary' | 'secondary' | 'danger' | 'link' | 'text';
  /**
   * Set to true if we want to render slot instead of default footer
   */
  custom: any;
  /**
   * Function to call on submit of modal
   */
  submit: any;
  /**
   * Function to call on close of modal
   */
  close: any;
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad(): void;
  /**
   * render slot when custom attribute is passed, else renders the default footer with submit and cancel buttons
   * @returns {JSX.Element}
   */
  render(): JSX.Element;
}
