import type { Components, JSX } from "../types/components";

interface FwTextarea extends Components.FwTextarea, HTMLElement {}
export const FwTextarea: {
  prototype: FwTextarea;
  new (): FwTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
