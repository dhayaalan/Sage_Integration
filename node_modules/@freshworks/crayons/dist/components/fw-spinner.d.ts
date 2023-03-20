import type { Components, JSX } from "../types/components";

interface FwSpinner extends Components.FwSpinner, HTMLElement {}
export const FwSpinner: {
  prototype: FwSpinner;
  new (): FwSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
