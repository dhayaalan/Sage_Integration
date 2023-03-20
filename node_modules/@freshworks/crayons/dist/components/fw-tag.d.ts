import type { Components, JSX } from "../types/components";

interface FwTag extends Components.FwTag, HTMLElement {}
export const FwTag: {
  prototype: FwTag;
  new (): FwTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
