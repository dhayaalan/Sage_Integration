import type { Components, JSX } from "../types/components";

interface FwAccordionTitle extends Components.FwAccordionTitle, HTMLElement {}
export const FwAccordionTitle: {
  prototype: FwAccordionTitle;
  new (): FwAccordionTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
