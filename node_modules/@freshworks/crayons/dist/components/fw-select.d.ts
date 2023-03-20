import type { Components, JSX } from "../types/components";

interface FwSelect extends Components.FwSelect, HTMLElement {}
export const FwSelect: {
  prototype: FwSelect;
  new (): FwSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
