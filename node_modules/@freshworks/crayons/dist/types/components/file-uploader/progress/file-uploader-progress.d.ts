import { EventEmitter } from '../../../stencil-public-runtime';
export declare class FileUploaderProgress {
  /**
   * file Id
   */
  fileId: number;
  /**
   * file name
   */
  fileName: string;
  /**
   * file upload progress
   */
  progress: number;
  /**
   * error text for the file upload
   */
  error: string;
  /**
   * retryUpload event to emit in case of a retry
   */
  fwRetryUpload: EventEmitter;
  /**
   * private
   * @param fileId
   */
  retryFileUpload(fileId: any): void;
  /**
   * render
   * @returns {JSX.Element}
   */
  render(): any;
}
