import { EventEmitter } from '../../stencil-public-runtime';
export declare class InlineMessage {
  host: HTMLElement;
  private autoHideTimeout;
  /**
   * Makes the inline message closable.
   */
  closable: boolean;
  /**
   * The type of inline message to be displayed. Defaults to info.
   */
  type: 'success' | 'warning' | 'info' | 'error';
  /**
   * The duration in milliseconds for which inline message will be shown.
   */
  duration: number;
  /**
   * Indicates whether the inline message is open or not.
   */
  open: boolean;
  /**
   * Triggered when inline message is shown.
   */
  fwShow: EventEmitter;
  /**
   * Triggered when inline message is hidden.
   */
  fwHide: EventEmitter;
  startAutoHide(): void;
  handleOpen(): void;
  handleDurationChange(): void;
  show(): Promise<void>;
  hide(): Promise<void>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleKeyUp(e: any): void;
  handleClose(): void;
  render(): any;
}
