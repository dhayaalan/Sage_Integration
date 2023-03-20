import type { Components, JSX } from "../types/components";

interface FwFileUploader extends Components.FwFileUploader, HTMLElement {}
export const FwFileUploader: {
  prototype: FwFileUploader;
  new (): FwFileUploader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
