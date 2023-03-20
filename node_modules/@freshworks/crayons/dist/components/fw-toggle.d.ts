import type { Components, JSX } from "../types/components";

interface FwToggle extends Components.FwToggle, HTMLElement {}
export const FwToggle: {
  prototype: FwToggle;
  new (): FwToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
