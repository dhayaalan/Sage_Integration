import type { Components, JSX } from "../types/components";

interface FwTabs extends Components.FwTabs, HTMLElement {}
export const FwTabs: {
  prototype: FwTabs;
  new (): FwTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
