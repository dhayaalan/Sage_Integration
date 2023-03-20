import type { Components, JSX } from "../types/components";

interface FwFormatNumber extends Components.FwFormatNumber, HTMLElement {}
export const FwFormatNumber: {
  prototype: FwFormatNumber;
  new (): FwFormatNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
