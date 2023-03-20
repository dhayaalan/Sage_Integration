/** use this file for exposing global functions and ways to set global config **/
import { ToastOptions, ToastResult } from '../components/toast/toast-util';
import { ProgressLoaderMethods, ProgressLoaderOptions } from '../components/progress-loader/progress-loader-util';
import { dateOptions } from '../components/format-date/format-date-util';
export declare function ToastController(config?: ToastOptions): ToastResult;
export declare function ProgressLoaderController(config: ProgressLoaderOptions): ProgressLoaderMethods;
export declare function DateFormatController({ date, locale, options, }?: {
  date: string | Date | number;
  locale: string | [];
  options: dateOptions;
}): string;
export { registerIconLibrary, unregisterIconLibrary, } from '../components/icon/library.icon.utils';
