import type { Components, JSX } from "../types/components";

interface FwTooltip extends Components.FwTooltip, HTMLElement {}
export const FwTooltip: {
  prototype: FwTooltip;
  new (): FwTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
