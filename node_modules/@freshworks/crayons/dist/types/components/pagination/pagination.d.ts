import { EventEmitter } from '../../stencil-public-runtime';
export declare class Pagination {
  private end;
  private start;
  /**
   * The current page number.
   */
  page: number;
  /**
   * The total number of records. This is a mandatory parameter.
   */
  total: number;
  /**
   *The number of records to be shown per page. Defaults to 10.
   */
  perPage: number;
  /**
   * Aria Label to be used for the button group.
   */
  buttonGroupLabel: string;
  /**
   * Aria Label to be used for previous button.
   */
  previousButtonLabel: string;
  /**
   * Aria Label to be used for next button.
   */
  nextButtonLabel: string;
  /**
   * Indicates if the records in current page are being fetched.
   */
  isLoading: boolean;
  /**
   * Triggered when either previous or next button is clicked.
   */
  fwChange: EventEmitter;
  /**
   * Navigates to previous set of records if available.
   */
  previousPage(): Promise<void>;
  /**
   * Navigates to next set of records if available.
   */
  nextPage(): Promise<void>;
  private getLastPage;
  private getStartRecord;
  private getEndRecord;
  handlePage(page: any): void;
  handleTotal(): void;
  componentWillLoad(): void;
  private goToPrevious;
  private goToNext;
  render(): any;
}
