import type { Components, JSX } from "../types/components";

interface FwModalContent extends Components.FwModalContent, HTMLElement {}
export const FwModalContent: {
  prototype: FwModalContent;
  new (): FwModalContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
