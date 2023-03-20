import { EventEmitter } from '../../stencil-public-runtime';
import { TagState, TagVariant } from '../../utils/types';
export declare class Tag {
  private tagContainer;
  private divLabel;
  private resizeObserver;
  host: HTMLElement;
  /**
   * Display text in the tag component.
   */
  text: string;
  /**
   * Display sub text in the tag component.
   */
  subText: string;
  /**
   * Sets the state of the tag to disabled. The close button is disabled. If the attribute’s value is undefined, the value is set to false.
   */
  disabled: boolean;
  /**
   * Value associated with the tag component, that is saved when the form data is saved.
   */
  value: string | number;
  /**
   * The variant of tag to be displayed.
   */
  variant: TagVariant;
  /**
   * The props need to be passed for the variant. If the variant is avatar then use this prop to send the props for the fw-avatar component.
   */
  graphicsProps: {};
  /**
   * Whether the Tag can be closed.
   */
  closable: boolean;
  /**
   * Whether the Tag is focusable.
   */
  focusable: boolean;
  /**
   * Theme based on which the tag is styled.
   */
  state: TagState;
  /**
   * If true, tag will be focused
   */
  isFocused: boolean;
  /**
   * Index of tag in a group of tags
   */
  index: string | number;
  /**
   * Truncate text with ellipsis when text overflows
   */
  showEllipsisOnOverflow: boolean;
  /**
   * Triggered when the tag is deselected.
   */
  fwClosed: EventEmitter;
  addTooltip: boolean;
  onKeyDown(event: any): void;
  setFocus(): Promise<any>;
  removeTag: (e: any) => void;
  private renderText;
  private renderLabel;
  private renderTruncatedContent;
  renderContent(): any;
  componentDidRender: () => void;
  disconnectedCallback(): void;
  private removeResizeObserver;
  render(): any;
}
