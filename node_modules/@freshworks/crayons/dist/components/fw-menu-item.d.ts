import type { Components, JSX } from "../types/components";

interface FwMenuItem extends Components.FwMenuItem, HTMLElement {}
export const FwMenuItem: {
  prototype: FwMenuItem;
  new (): FwMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
