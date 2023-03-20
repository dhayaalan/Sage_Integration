import type { Components, JSX } from "../types/components";

interface FwButton extends Components.FwButton, HTMLElement {}
export const FwButton: {
  prototype: FwButton;
  new (): FwButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
