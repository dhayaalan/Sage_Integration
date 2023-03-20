export interface ProgressLoaderOptions {
  /**
   * Changes the minimum percentage used upon starting. Default is `0.08`
   */
  minimum?: number;
  /**
   * Adjust animation settings using easing (a CSS easing string). Default is `ease`
   */
  easing?: string;
  /**
   * Add speed (in ms). Default is `200`
   */
  speed?: number;
  /**
   * Turn on/off the automatic incrementing behavior by setting this to false. Default is `true`
   */
  trickle?: boolean;
  /**
   * Adjust how often to trickle/increment, in ms. Default is `200`
   */
  trickleSpeed?: number;
  /**
   * Specify a selector to change the parent container. Default is `body`
   * Selector is accessed internally via document.querySelector method
   */
  parent?: string;
  /**
   * Use Custom markup. To keep the progress bar working, keep an element with class='bar' in there
   */
  template?: string;
}
export interface ProgressLoaderMethods {
  start: any;
  done: any;
  set: any;
  inc: any;
}
interface ProgressLoaderPropOptions extends ProgressLoaderOptions {
  show?: boolean;
}
export declare function getPropOptions(opts?: ProgressLoaderPropOptions): ProgressLoaderPropOptions;
export declare function createProgressLoaderContainer(options: ProgressLoaderOptions): ProgressLoaderMethods;
export {};
