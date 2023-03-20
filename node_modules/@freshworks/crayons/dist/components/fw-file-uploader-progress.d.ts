import type { Components, JSX } from "../types/components";

interface FwFileUploaderProgress extends Components.FwFileUploaderProgress, HTMLElement {}
export const FwFileUploaderProgress: {
  prototype: FwFileUploaderProgress;
  new (): FwFileUploaderProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
