import type { Components, JSX } from "../types/components";

interface FwDragContainer extends Components.FwDragContainer, HTMLElement {}
export const FwDragContainer: {
  prototype: FwDragContainer;
  new (): FwDragContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
