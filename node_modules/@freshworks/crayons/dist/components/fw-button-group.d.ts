import type { Components, JSX } from "../types/components";

interface FwButtonGroup extends Components.FwButtonGroup, HTMLElement {}
export const FwButtonGroup: {
  prototype: FwButtonGroup;
  new (): FwButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
