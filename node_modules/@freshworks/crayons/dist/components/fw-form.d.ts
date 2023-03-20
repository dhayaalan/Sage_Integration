import type { Components, JSX } from "../types/components";

interface FwForm extends Components.FwForm, HTMLElement {}
export const FwForm: {
  prototype: FwForm;
  new (): FwForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
