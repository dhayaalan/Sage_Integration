import type { Components, JSX } from "../types/components";

interface FwMenu extends Components.FwMenu, HTMLElement {}
export const FwMenu: {
  prototype: FwMenu;
  new (): FwMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
