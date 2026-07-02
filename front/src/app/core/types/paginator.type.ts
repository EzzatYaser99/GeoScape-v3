/**
 * Paginator event types
 */

export interface PaginatorStateChangeEvent {
  page?: number;
  first?: number;
  rows?: number;
  pageCount?: number;
}
