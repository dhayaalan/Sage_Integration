import type { Components, JSX } from "../types/components";

interface FwPill extends Components.FwPill, HTMLElement {}
export const FwPill: {
  prototype: FwPill;
  new (): FwPill;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
