import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FileUploaderFile {
  /**
   * file Id
   */
  fileId: number;
  /**
   * file name
   */
  name: string;
  /**
   * removeFile - event that gets triggered on file removal
   */
  fwRemoveFile: EventEmitter;
  /**
   * private
   * remove
   */
  remove(): void;
  /**
   * render
   * @returns {JSX.Element}
   */
  render(): any;
}
