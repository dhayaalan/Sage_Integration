import type { Components, JSX } from "../types/components";

interface FwAccordionBody extends Components.FwAccordionBody, HTMLElement {}
export const FwAccordionBody: {
  prototype: FwAccordionBody;
  new (): FwAccordionBody;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
