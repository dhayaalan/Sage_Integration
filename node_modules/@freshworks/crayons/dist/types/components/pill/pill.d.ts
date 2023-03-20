/// <reference types="react" />
export declare class Pill {
  el: HTMLFwPillElement;
  /**
   * Theme based on which the pill is styled.
   */
  color: 'blue' | 'red' | 'green' | 'yellow' | 'grey';
  hasIcon: boolean;
  componentWillLoad(): void;
  getPillClass(color: string): string;
  handleSlotChange(): void;
  render(): JSX.Element;
}
