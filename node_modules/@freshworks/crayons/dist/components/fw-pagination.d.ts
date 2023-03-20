import type { Components, JSX } from "../types/components";

interface FwPagination extends Components.FwPagination, HTMLElement {}
export const FwPagination: {
  prototype: FwPagination;
  new (): FwPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
