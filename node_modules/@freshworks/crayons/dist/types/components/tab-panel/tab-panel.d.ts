/**
 * @parent tab
 */
export declare class Panel {
  el: HTMLElement;
  /**
   * The panel name.
   */
  name: string;
  /**
   * If true sets the panel display to block, none otherwise.
   */
  active: boolean;
  connectedCallback(): void;
  render(): any;
}
