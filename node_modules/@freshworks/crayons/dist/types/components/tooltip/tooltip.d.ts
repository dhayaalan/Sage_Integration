/// <reference types="react" />
import { PopoverPlacementType, PopoverTriggerType } from '../../utils/types';
export declare class Tooltip {
  /**
   * To get access to the host element.
   */
  host: HTMLElement;
  /**
   * Placement of the popover content with respect to the popover trigger.
   */
  placement: PopoverPlacementType;
  /**
   * Alternative placement for popover if the default placement is not possible.
   */
  fallbackPlacements: [PopoverPlacementType];
  /**
   * Content of the tooltip.
   */
  content: string;
  /**
   * Distance defines the distance between the popover trigger and the popover content along y-axis.
   */
  distance: string;
  /**
   * The trigger event on which the popover-content is displayed. The available options are
   * 'click' | 'manual' | 'hover', in case of 'manual' no trigger event will be set.
   */
  trigger: PopoverTriggerType;
  /**
   * Option to prevent the tooltip from being clipped when the component is placed inside a container with
   * `overflow: auto|hidden|scroll`.
   */
  hoist: boolean;
  /**
   * Private
   * Reference to popover element.
   */
  private popoverRef;
  /**
   * Private
   * Set to true if we want to render slot instead of default footer.
   */
  private custom;
  /**
   * lifecycle event, called once just after the component is first connected to the DOM.
   */
  componentWillLoad(): void;
  /**
   * Shows the tooltip.
   * @returns promise that resolves to true
   */
  show(): Promise<boolean>;
  /**
   * Hides the tooltip.
   * @returns promise that resolves to true
   */
  hide(): Promise<boolean>;
  /**
   * Renders trigger and content elements through fw-popper element.
   * @returns {JSX.Element}
   */
  render(): JSX.Element;
}
