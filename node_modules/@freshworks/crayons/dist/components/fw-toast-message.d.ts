import type { Components, JSX } from "../types/components";

interface FwToastMessage extends Components.FwToastMessage, HTMLElement {}
export const FwToastMessage: {
  prototype: FwToastMessage;
  new (): FwToastMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
