import type { Components, JSX } from "../types/components";

interface FwModal extends Components.FwModal, HTMLElement {}
export const FwModal: {
  prototype: FwModal;
  new (): FwModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
