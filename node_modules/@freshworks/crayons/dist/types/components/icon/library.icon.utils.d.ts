import type { Icon } from './icon';
export declare type IconLibraryResolver = (name: string) => string;
export declare type SVGMutator = (svg: SVGElement, name: string) => void;
export interface FwIconLibrary {
  name: string;
  resolver: IconLibraryResolver;
  mutator?: SVGMutator;
}
export declare function watchIcon(icon: Icon): void;
export declare function unwatchIcon(icon: Icon): void;
export declare function getIconLibrary(name?: string): FwIconLibrary;
export declare function getSVGElement(url: string): Promise<SVGElement>;
export declare function registerIconLibrary(name: string, options: {
  resolver: IconLibraryResolver;
  mutator?: SVGMutator;
}): void;
export declare function unregisterIconLibrary(name: string): void;
