import type { Components, JSX } from "../types/components";

interface FwTabPanel extends Components.FwTabPanel, HTMLElement {}
export const FwTabPanel: {
  prototype: FwTabPanel;
  new (): FwTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
