import type { Components, JSX } from "../types/components";

interface FwToggleGroupButton extends Components.FwToggleGroupButton, HTMLElement {}
export const FwToggleGroupButton: {
  prototype: FwToggleGroupButton;
  new (): FwToggleGroupButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
