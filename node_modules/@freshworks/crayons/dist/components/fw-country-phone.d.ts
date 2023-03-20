import type { Components, JSX } from "../types/components";

interface FwCountryPhone extends Components.FwCountryPhone, HTMLElement {}
export const FwCountryPhone: {
  prototype: FwCountryPhone;
  new (): FwCountryPhone;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
