import type { Components, JSX } from "../types/components";

interface FwToast extends Components.FwToast, HTMLElement {}
export const FwToast: {
  prototype: FwToast;
  new (): FwToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
