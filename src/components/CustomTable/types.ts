import { PageWithPaginationProps } from "layout/PageWithPagination";

export interface CustomTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  paginationProps: Omit<PageWithPaginationProps, "setPagination">;
  onRowClick?: (data: T, rowIndex: number) => void;
}

export interface TableColumn<T> {
  columnKey: keyof T | string;
  render?: (value: T, field: unknown) => JSX.Element;
  width?: number | string;
}
