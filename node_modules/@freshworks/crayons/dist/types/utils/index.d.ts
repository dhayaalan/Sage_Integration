export declare function format(first: string, middle: string, last: string): string;
export declare const watchForOptions: <T extends HTMLElement>(containerEl: HTMLElement, tagName: string, onChange: (el: T) => void) => MutationObserver;
export declare const findCheckedOption: (el: any, tagName: string) => HTMLElement;
export declare const renderHiddenField: (container: HTMLElement, name: string, value: string | null, files?: FileList | null) => void;
declare type handlerArg = (event?: KeyboardEvent) => void;
export declare const handleKeyDown: (handler: handlerArg, skipSpace?: boolean) => (e: KeyboardEvent) => void;
export declare const throttle: (func: any, context: any, delay: any) => (...args: any[]) => void;
export declare const getFocusableChildren: (node: HTMLElement) => any[];
export declare const isFocusable: (element: any) => boolean;
export declare const hasSlot: (el: HTMLElement, name?: string) => boolean;
export declare const debounce: (fn: any, context: any, timeout: any) => (...args: any[]) => void;
export declare function cloneNodeWithEvents(oElm: Node, shouldCopyDeep?: boolean, shouldCopyEvents?: boolean): Node;
export declare const cyclicIncrement: (value: number, maxValue: number) => number;
export declare const cyclicDecrement: (value: number, maxValue: number) => number;
export declare const isEqual: (a: any, b: any) => boolean;
export declare const isArrayEquals: (a: any, b: any) => boolean;
export declare const addRTL: (host: any) => void;
export declare const popperModifierRTL: {
  name: string;
  enabled: boolean;
  phase: string;
  fn({ state }: {
    state: any;
  }): void;
};
export {};
