import type { Components, JSX } from "../types/components";

interface FwCheckbox extends Components.FwCheckbox, HTMLElement {}
export const FwCheckbox: {
  prototype: FwCheckbox;
  new (): FwCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
