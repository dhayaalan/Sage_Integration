import type { Components, JSX } from "../types/components";

interface FwAvatar extends Components.FwAvatar, HTMLElement {}
export const FwAvatar: {
  prototype: FwAvatar;
  new (): FwAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
