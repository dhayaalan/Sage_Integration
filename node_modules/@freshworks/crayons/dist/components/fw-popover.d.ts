import type { Components, JSX } from "../types/components";

interface FwPopover extends Components.FwPopover, HTMLElement {}
export const FwPopover: {
  prototype: FwPopover;
  new (): FwPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
