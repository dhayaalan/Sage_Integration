import type { Components, JSX } from "../types/components";

interface FwCustomCellIcon extends Components.FwCustomCellIcon, HTMLElement {}
export const FwCustomCellIcon: {
  prototype: FwCustomCellIcon;
  new (): FwCustomCellIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
