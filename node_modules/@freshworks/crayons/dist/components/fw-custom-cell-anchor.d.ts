import type { Components, JSX } from "../types/components";

interface FwCustomCellAnchor extends Components.FwCustomCellAnchor, HTMLElement {}
export const FwCustomCellAnchor: {
  prototype: FwCustomCellAnchor;
  new (): FwCustomCellAnchor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
