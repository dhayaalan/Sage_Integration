import type { Components, JSX } from "../types/components";

interface FwCustomCellParagraph extends Components.FwCustomCellParagraph, HTMLElement {}
export const FwCustomCellParagraph: {
  prototype: FwCustomCellParagraph;
  new (): FwCustomCellParagraph;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
