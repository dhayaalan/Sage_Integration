import type { Components, JSX } from "../types/components";

interface FwRadio extends Components.FwRadio, HTMLElement {}
export const FwRadio: {
  prototype: FwRadio;
  new (): FwRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
