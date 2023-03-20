import type { Components, JSX } from "../types/components";

interface FwIcon extends Components.FwIcon, HTMLElement {}
export const FwIcon: {
  prototype: FwIcon;
  new (): FwIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
