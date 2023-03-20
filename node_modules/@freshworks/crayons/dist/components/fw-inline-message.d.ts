import type { Components, JSX } from "../types/components";

interface FwInlineMessage extends Components.FwInlineMessage, HTMLElement {}
export const FwInlineMessage: {
  prototype: FwInlineMessage;
  new (): FwInlineMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
