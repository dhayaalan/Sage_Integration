import type { Components, JSX } from "../types/components";

interface FwFormatDate extends Components.FwFormatDate, HTMLElement {}
export const FwFormatDate: {
  prototype: FwFormatDate;
  new (): FwFormatDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
