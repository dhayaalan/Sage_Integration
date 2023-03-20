import type { Components, JSX } from "../types/components";

interface FwModalFooter extends Components.FwModalFooter, HTMLElement {}
export const FwModalFooter: {
  prototype: FwModalFooter;
  new (): FwModalFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
