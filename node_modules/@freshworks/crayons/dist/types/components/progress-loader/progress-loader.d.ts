/// <reference types="react" />
export declare class ProgressLoader {
  private progressObj;
  /**
   * Specify a selector to change the parent container. Default is `body`
   * Selector is accessed internally via document.querySelector method
   */
  parent: string;
  /**
   * Changes the minimum percentage used upon starting. Default is `0.08`
   */
  minimum: number;
  /**
   * Adjust animation settings using easing (a CSS easing string). Default is `ease`
   */
  easing: string;
  /**
   * Add speed (in ms). Default is `200`
   */
  speed: number;
  /**
   * Turn on/off the automatic incrementing behavior by setting this to false. Default is `true`
   */
  trickle: boolean;
  /**
   * Adjust how often to trickle/increment, in ms. Default is `200`
   */
  trickleSpeed: number;
  /**
   * Use Custom markup. To keep the progress bar working, keep an element with class='bar' in there
   */
  template: string;
  /**
   * Show progress loader. Default `false`
   */
  show: boolean;
  /**
   * Method to start showing the progress loader
   */
  start(): Promise<void>;
  /**
   * Method to end the progress. This hides the progress loader
   */
  done(): Promise<void>;
  /**
   * Increments the progress status by a random amount.
   */
  inc(): Promise<void>;
  /**
   * Sets the progress loader status, where `n` is a number from `0.0` to `1.0`.
   */
  set(n: number): Promise<void>;
  showChanged(show: boolean): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  render(): JSX.Element;
}
