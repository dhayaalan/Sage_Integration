import type { Components, JSX } from "../types/components";

interface FwSkeleton extends Components.FwSkeleton, HTMLElement {}
export const FwSkeleton: {
  prototype: FwSkeleton;
  new (): FwSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
