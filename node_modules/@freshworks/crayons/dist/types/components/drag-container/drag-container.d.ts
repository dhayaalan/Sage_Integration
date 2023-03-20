import { EventEmitter } from '../../stencil-public-runtime';
export declare class DragContainer {
  host: HTMLElement;
  private containerInstance;
  /**
   * Id of the fw-sortable element from which draggable content can be accepted. Add comma separated id's for multiple containers.
   */
  acceptFrom: string;
  /**
   * Whether the drag element should be added to the container on drop. If set to false, the placeholder will be retained.
   */
  addOnDrop: boolean;
  /**
   * Whether the drag element should be moved or copied.
   */
  copy: boolean;
  /**
   * The class name for the drag/drop placeholder. Add space separated class names for multiple classes
   */
  placeholderClass: string;
  /**
   * Whether the list should be sortable.
   */
  sortable: boolean;
  /**
   * Triggered when an draggable item is dropped inside the container.
   */
  fwDrop: EventEmitter<void>;
  componentWillLoad(): void;
  emitFwDrop(ev: any): void;
  disconnectedCallback(): void;
  render(): any;
}
