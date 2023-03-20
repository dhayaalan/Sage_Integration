import { EventEmitter } from '../../stencil-public-runtime';
export declare class FileUploader {
  host: HTMLElement;
  /**
   * stage - different stages in file uploader.
   */
  stage: 'dropzone' | 'files' | 'progress';
  /**
   * text - file uploader text.
   */
  text: any;
  /**
   * name - field name
   */
  name: string;
  /**
   * description - file uploader description.
   */
  description: any;
  /**
   * hint - file uploader hint text.
   */
  hint: string;
  /**
   * accept - comma separated string. tells us what file formats file uploader should accept.
   */
  accept: string;
  /**
   * maxFileSize - maximum file size the file uploader must accept.
   */
  maxFileSize: number;
  /**
   * acceptError - Error message to display when format is invalid.
   */
  acceptError: any;
  /**
   * maxFileSizeError - Error message to display when file size exceeds limit
   */
  maxFileSizeError: any;
  /**
   * maxFilesLimitError - Error message when going beyond files limit.
   */
  maxFilesLimitError: any;
  /**
   * fileUploadError - Error message when a file upload fails.
   */
  fileUploadError: any;
  /**
   * actionURL - URL to make server call.
   */
  actionURL: string;
  /**
   * actionParams - additional information to send to server other than the file.
   */
  actionParams: any;
  /**
   * multiple - upload multiple files.
   */
  multiple: boolean;
  /**
   * Max files allowed to upload.
   */
  filesLimit: number;
  /**
   * modify request
   * @param xhr
   * @returns xhr
   */
  modifyRequest: (xhr: any) => any;
  /**
   * files - files collection.
   */
  files: any;
  /**
   * errors - errors collection.
   */
  errors: any;
  /**
   * filesUploaded - event that gets emitted when files get uploaded
   */
  fwFilesUploaded: EventEmitter;
  /**
   * fileReuploaded - event that gets emitted when file is reuploaded
   */
  fwFileReuploaded: EventEmitter;
  /**
   * stageChanged - event that gets emitted when component stage changes
   */
  fwStageChanged: EventEmitter;
  /**
   * private
   * fileInputElement
   */
  fileInputElement: HTMLElement;
  /**
   * private
   * isFileUploadInProgress
   */
  isFileUploadInProgress: boolean;
  /**
   * private
   * fileUploadPromises
   */
  fileUploadPromises: any;
  /**
   * private
   * formDataCollection
   */
  formDataCollection: any;
  stageChange(newStage: any): void;
  /**
   * private
   * uploadFileLocally - upload the files locally and add it to form for sending to server
   * @param file
   */
  uploadFileLocally(file: any): void;
  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  uploadFile(fileId: any): Promise<unknown>;
  /**
   * private
   * retryFileUpload retry a file upload
   * @param fileId
   */
  retryFileUpload(fileId: any): void;
  _getFiles(): FileList;
  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  getFiles(): Promise<FileList>;
  /**
   * uploadFiles - uploads the files to the server. emits an after file is uploaded.
   */
  uploadFiles(): Promise<void>;
  /**
   * reset file uploader
   */
  reset(): Promise<void>;
  /**
   * private
   * removeFile - remove a file from the form and files collection.
   * @param fileId
   */
  removeFile(fileId: any): void;
  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file: any): boolean;
  /**
   * private
   * setFile - update the file object in files collection.
   */
  setFile(fileId: number, errorObject: any): boolean;
  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event: any): void;
  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event: any): void;
  /**
   * private
   * progressHandler - update the progress on files
   * @param fileId
   * @param event
   */
  progressHandler(fileId: any, event: any): void;
  /**
   * renderFileUploader
   * @returns {JSX.Element}
   */
  renderFileUploader(): any;
  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone(): any;
  /**
   * renderProgress
   * @returns {JSX.Element}
   */
  renderProgress(): any;
  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles(): any;
  /**
   * render
   * @returns {JSX.Element}
   */
  render(): any;
}
