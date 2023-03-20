export declare class Label {
  /**
   * Theme based on which the label is styled.
   */
  color: 'blue' | 'red' | 'green' | 'yellow' | 'grey' | 'normal';
  /**
   * Display text in the label.
   */
  value: string;
  render(): any;
}
