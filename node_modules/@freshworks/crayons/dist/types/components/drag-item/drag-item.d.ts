export declare class DragItem {
  el: HTMLElement;
  draggable: boolean;
  private dragIcon?;
  /**
   * Whether the drag is disabled or not.
   */
  disabled: boolean;
  /**
   * Whether the drag icon should be visible.
   */
  showDragIcon: boolean;
  /**
   * Pinned position of the drag item, other drag item cannot be placed above or below it.
   */
  pinned: 'top' | 'bottom';
  componentDidLoad(): void;
  toggleDraggable(): void;
  disconnectedCallback(): void;
  render(): any;
}
