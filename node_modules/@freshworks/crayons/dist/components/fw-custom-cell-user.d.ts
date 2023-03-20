import type { Components, JSX } from "../types/components";

interface FwCustomCellUser extends Components.FwCustomCellUser, HTMLElement {}
export const FwCustomCellUser: {
  prototype: FwCustomCellUser;
  new (): FwCustomCellUser;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
