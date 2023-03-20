import type { Components, JSX } from "../types/components";

interface FwInput extends Components.FwInput, HTMLElement {}
export const FwInput: {
  prototype: FwInput;
  new (): FwInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
