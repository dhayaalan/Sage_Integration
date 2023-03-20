import type { Components, JSX } from "../types/components";

interface FwListOptions extends Components.FwListOptions, HTMLElement {}
export const FwListOptions: {
  prototype: FwListOptions;
  new (): FwListOptions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
