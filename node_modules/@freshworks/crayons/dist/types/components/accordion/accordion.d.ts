import { EventEmitter } from '../../stencil-public-runtime';
export interface AccordionToggleEvent {
  expanded: boolean;
}
export declare class Accordion {
  el: HTMLFwAccordionElement;
  private accordionTitle;
  private accordionBody;
  /**
   * The type of accordion to be displayed.
   * default => Accordion with all borders
   * no_bounding_box => Accordion with top and bottom borders only
   */
  type: 'default' | 'no_bounding_box';
  /**
   * To manage accordion expanded or collapsed state
   */
  expanded: boolean;
  /**
   * Triggered when the accordion is expanded or collapsed
   */
  fwAccordionToggle: EventEmitter<AccordionToggleEvent>;
  /**
   * Method available from the component to toggle expanded or collapsed state of accordion
   * @returns promise that resolves to true
   */
  toggle(): Promise<boolean>;
  watchExpanded(newValue: boolean): void;
  toggleState: () => void;
  updateState(): void;
  componentWillLoad(): void;
  render(): any;
}
