import type { Components, JSX } from "../types/components";

interface FwToggleGroup extends Components.FwToggleGroup, HTMLElement {}
export const FwToggleGroup: {
  prototype: FwToggleGroup;
  new (): FwToggleGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
