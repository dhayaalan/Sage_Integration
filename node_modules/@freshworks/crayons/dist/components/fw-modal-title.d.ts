import type { Components, JSX } from "../types/components";

interface FwModalTitle extends Components.FwModalTitle, HTMLElement {}
export const FwModalTitle: {
  prototype: FwModalTitle;
  new (): FwModalTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
