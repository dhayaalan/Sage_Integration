export declare class Icon {
  el: HTMLElement;
  /**
   * Identifier of the icon. The attribute’s value must be a valid svg Name in the Crayons-Icon set.
   */
  name: string;
  /**
   * An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices.
   */
  label: string;
  /**
   * Identifier of the icon. The attribute’s value must be a valid JS Import Name of the svg in the named export from @freshworks/crayons-icon.
   */
  dataSvg: string;
  /**
   * Identifier of the icon. The attribute’s value must be a valid url of the svg icon.
   */
  url: string;
  /**
   * Identifier of the icon. The attribute’s value must be a valid path to svg file.
   */
  src: string;
  /**
   * Size of the icon, specified in number of  pixels. This will be square coordinates of (w X h) = size X size
   */
  size: number;
  /**
   * Root Margin in px or percentage for Intersection-Observer. This means from ref to bottom of loaded view , the item loads when it crosses above the negative y margin.
   */
  xRootMargin: string;
  /**
   * Width of the icon, specified in number of  pixels.
   */
  width: number;
  /**
   * Height of the icon, specified in number of  pixels.
   */
  height: number;
  /**
   * Color in which the icon is displayed, specified as a standard CSS color or as a HEX code.
   */
  color: string;
  /**
   * Name of External Library to be used
   */
  library: string;
  /**
   * Enable Intersection Observer. Default is false.
   */
  lazy: boolean;
  private setElVisible;
  private visible;
  private intersectionObserver;
  private svg;
  componentWillLoad(): Promise<void>;
  connectedCallback(): void;
  nameChangeHandler(): void;
  dataSvgChangeHandler(): void;
  urlChangeHandler(): void;
  disconnectedCallback(): void;
  private applyIconPropstoState;
  private drawIcon;
  /** Fetches the icon and redraws it. Used to handle library registrations. */
  redrawIcon(): void;
  loadFallbackImage(): Promise<void>;
  private getIconUrl;
  private getIconUrlfromlib;
  private applySVGMutation;
  render(): any;
}
