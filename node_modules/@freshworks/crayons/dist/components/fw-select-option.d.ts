import type { Components, JSX } from "../types/components";

interface FwSelectOption extends Components.FwSelectOption, HTMLElement {}
export const FwSelectOption: {
  prototype: FwSelectOption;
  new (): FwSelectOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
