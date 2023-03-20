/// <reference types="react" />
import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @parent toast
 */
export declare class ToastMessage {
  controllerEl: HTMLElement;
  /**
   * visibility prop of toast message
   */
  open: boolean;
  /**
   * To indicate mouse hover on toast
   */
  isMouseHovered: boolean;
  /**
   * To indicate toast close timeout
   */
  isTimedOut: boolean;
  /**
   * stored setTimeOut id to close it
   */
  timerId: any;
  /**
   * To add close animation class to toast
   */
  fadeOut: boolean;
  /**
   * State icon size
   */
  iconSize: number;
  /**
   * Type of the toast - success,failure, warning, inprogress
   */
  type: 'success' | 'error' | 'warning' | 'inprogress';
  /**
   * Time duration of the toast visibility
   */
  timeout: number;
  /**
   * The content to be displayed in toast
   */
  content: string;
  /**
   *  The Content of the action link
   */
  actionLinkText: string;
  /**
   *  won't close automatically
   */
  sticky: boolean;
  /**
   *  Pause the toast from hiding on mouse hover
   */
  pauseOnHover: boolean;
  /**
   * Triggered when the action link clicked.
   */
  fwLinkClick: EventEmitter;
  /**
   * Triggered on closing the toast message.
   * This event gets used by the parent container to remove the toast message from itself
   */
  fwRemoveToast: EventEmitter;
  openChanged(open: boolean): void;
  componentWillLoad(): Promise<void>;
  setUpToast(): Promise<void>;
  mouseHover(value?: boolean): Promise<void>;
  closingAnimation(): Promise<void>;
  closeToast(): Promise<void>;
  disconnectedCallback(): void;
  render(): JSX.Element;
}
