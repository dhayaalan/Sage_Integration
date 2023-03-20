import type { Components, JSX } from "../types/components";

interface FwDataTable extends Components.FwDataTable, HTMLElement {}
export const FwDataTable: {
  prototype: FwDataTable;
  new (): FwDataTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
