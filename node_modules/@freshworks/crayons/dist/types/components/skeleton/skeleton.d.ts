/// <reference types="react" />
export declare class Skeleton {
  /** Effect the skeleton will use. */
  effect: 'pulse' | 'sheen' | 'none';
  /**
   * Variant of the skeleton - circle or rectangle or text
   */
  variant: 'circle' | 'rect' | 'text';
  /**
   * Width of the skeleton ex. 100px, 100%, auto etc.
   */
  width: string;
  /**
   * Height of the skeleton ex. 100px, 100%, auto etc.
   */
  height: string;
  /**
   * MarginBottom of the skeleton ex. 10px, 0 etc.
   */
  marginBottom: string;
  /**
   * Number of rows of current skeleton type
   */
  count: number;
  /**
   * Custom css styles (background/margins/width/height etc.)
   *
   * @type {({[k: string]: string} | string)}
   */
  customStyles: {
    [key: string]: string;
  } | string;
  items: number[];
  componentWillLoad(): void;
  componentWillUpdate(): void;
  init(): void;
  get style(): any;
  render(): JSX.Element | JSX.Element[];
}
