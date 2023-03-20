import type { Components, JSX } from "../types/components";

interface FwAccordion extends Components.FwAccordion, HTMLElement {}
export const FwAccordion: {
  prototype: FwAccordion;
  new (): FwAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
