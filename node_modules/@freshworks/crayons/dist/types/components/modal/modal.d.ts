/// <reference types="react" />
import { EventEmitter } from '../../stencil-public-runtime';
export declare class Modal {
  /**
   * To get access to the host element
   */
  el: HTMLFwModalElement;
  /**
   * Modal title element
   */
  modalTitle: HTMLFwModalTitleElement;
  /**
   * Modal footer element
   */
  modalFooter: HTMLFwModalFooterElement;
  /**
   * Modal content element
   */
  modalContent: HTMLFwModalContentElement;
  /**
   * Property to add or remove the top right close icon button
   */
  hasCloseIconButton: boolean;
  /**
   * The title text to be displayed on the modal
   */
  titleText: string;
  /**
   * The description text to be displayed on the modal
   */
  description: string;
  /**
   * The icon to be displayed with the title
   */
  icon: string;
  /**
   * Size of the modal
   */
  size: 'standard' | 'small' | 'large';
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
   * Hide footer for the modal
   */
  hideFooter: boolean;
  /**
   * Convert modal to slider
   */
  slider: boolean;
  /**
   * Toggle the visibility of the modal
   */
  isOpen: boolean;
  /**
   * Triggered when the default action button is clicked.
   */
  fwSubmit: EventEmitter<void>;
  /**
   * Triggered when modal is opened.
   */
  fwOpen: EventEmitter<void>;
  /**
   * Triggered when modal is closed.
   */
  fwClose: EventEmitter<void>;
  /**
   * private
   * Modal container ref
   */
  modalContainer: HTMLElement;
  /**
   * private
   * Handler to run on modal container opening
   */
  modalContainerHandler: any;
  /**
   * private
   * Modal first focus element
   */
  firstFocusableElement: HTMLElement;
  /**
   * private
   * Handler to first focusable element. Focuses last element on tab for focus locking.
   */
  firstFocusableElementHandler: any;
  /**
   * private
   * Modal last focus element
   */
  lastFocusableElement: HTMLElement;
  /**
   * private
   * Handler for last focusable element. Focus first element on shift+tab for focus locking.
   */
  lastFocusableElementHandler: any;
  /**
   * private
   * Modal element to focus on open
   */
  modalOpenFocusElement: HTMLElement;
  /**
   * private
   * flag to add events to elements only on initial modal load
   */
  accessibilityAdded: boolean;
  /**
   * private
   * escape key handler
   */
  escapeHandler: any;
  /**
   * private
   * styleVariation styles that vary in normal and slider variations
   */
  styleVariation: {
    closeColor: {
      modal: string;
      slider: string;
    };
    closeSize: {
      modal: number;
      slider: number;
    };
    closeName: {
      modal: string;
      slider: string;
    };
  };
  connectedCallback(): void;
  /**
   * lifecycle event, called once just after the component is first connected to the DOM
   */
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  visibilityChange(open: boolean): void;
  footerVisibilityChange(hideFooter: boolean): void;
  /**
   * Method available from the component to perform close action on the modal
   * @returns promise that resolves to true
   */
  close(): Promise<boolean>;
  /**
   * Method available from the component to perform open action on the modal
   * @returns promise that resolves to true
   */
  open(): Promise<boolean>;
  /**
   * private submit
   */
  submit(): void;
  /**
   * Adds accesibility related events to the component.
   * Major actions would be to focus-lock inside modal and to focus on close button when opening the component.
   */
  addAccesibilityEvents(): void;
  /**
   * Removes accesibility related events bound to the document.
   */
  removeAccesibilityEvents(): void;
  /**
   * @param element element to focus on
   */
  focusElement(element: any): void;
  /**
   * Renders Icon in Modal header.
   * @returns {JSX.Element}
   */
  renderIcon(): JSX.Element;
  /**
   * Renders title text and description in modal header.
   * @returns {JSX.Element}
   */
  renderTitle(): JSX.Element;
  /**
   * renders the slot content in the modal.
   * @returns {JSX.Element}
   */
  renderContent(): JSX.Element;
  /**
   * renders the default footer in the modal
   * @returns {JSX.Element}
   */
  renderFooter(): JSX.Element;
  /**
   * renders either default modal content based on attributes or renders the modal child components like
   * modal-title, modal-content and modal-footer components.
   * @returns {JSX.Element}
   */
  render(): JSX.Element;
}
