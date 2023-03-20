import type { Components, JSX } from "../types/components";

interface FwFormControl extends Components.FwFormControl, HTMLElement {}
export const FwFormControl: {
  prototype: FwFormControl;
  new (): FwFormControl;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
