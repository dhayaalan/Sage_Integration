import type { Components, JSX } from "../types/components";

interface FwDatepicker extends Components.FwDatepicker, HTMLElement {}
export const FwDatepicker: {
  prototype: FwDatepicker;
  new (): FwDatepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
