export declare class Spinner {
  /**
   * Size of the loader.
   */
  size: 'micro' | 'small' | 'medium' | 'large' | 'default';
  /**
   * Color in which the loader is displayed, specified as a standard CSS color.
   */
  color: string;
  sizeMap: {
    micro: number;
    small: number;
    default: number;
    medium: number;
    large: number;
  };
  getSize(): number;
  render(): any;
}
