import type { Components, JSX } from "../types/components";

interface FwLabel extends Components.FwLabel, HTMLElement {}
export const FwLabel: {
  prototype: FwLabel;
  new (): FwLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
