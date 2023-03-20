import type { Components, JSX } from "../types/components";

interface FwFileUploaderFile extends Components.FwFileUploaderFile, HTMLElement {}
export const FwFileUploaderFile: {
  prototype: FwFileUploaderFile;
  new (): FwFileUploaderFile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
