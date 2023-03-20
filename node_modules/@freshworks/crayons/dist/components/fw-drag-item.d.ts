import type { Components, JSX } from "../types/components";

interface FwDragItem extends Components.FwDragItem, HTMLElement {}
export const FwDragItem: {
  prototype: FwDragItem;
  new (): FwDragItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
