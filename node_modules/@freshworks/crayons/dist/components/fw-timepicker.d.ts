import type { Components, JSX } from "../types/components";

interface FwTimepicker extends Components.FwTimepicker, HTMLElement {}
export const FwTimepicker: {
  prototype: FwTimepicker;
  new (): FwTimepicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
