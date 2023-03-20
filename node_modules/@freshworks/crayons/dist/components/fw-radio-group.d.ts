import type { Components, JSX } from "../types/components";

interface FwRadioGroup extends Components.FwRadioGroup, HTMLElement {}
export const FwRadioGroup: {
  prototype: FwRadioGroup;
  new (): FwRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
