import type { Components, JSX } from "../types/components";

interface FwProgressLoader extends Components.FwProgressLoader, HTMLElement {}
export const FwProgressLoader: {
  prototype: FwProgressLoader;
  new (): FwProgressLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
