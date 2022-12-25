import { Box, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { CustomTableProps } from './types';
import ClearIcon from '@mui/icons-material/Clear';


export function CustomTable<T>(props: CustomTableProps<T>): JSX.Element {
    const {data, columns, onRowClick = null, paginationProps } = props;

    const handleClickingTableRow = (data: T, rowIndex: number) => (): void => {
        onRowClick && onRowClick(data, rowIndex);
    }

    const renderTableRow = (data: T, index: number): JSX.Element => {
        return (
            <TableRow key={index} onClick={handleClickingTableRow(data, index)}>
                {columns.map(column => {
                    const keyExists = data.hasOwnProperty(column.columnKey);

                    return (
                        <TableCell key={`${column.columnKey.toString()}-${index}`}>
                            {column.render ? column.render(data, keyExists ? data[column.columnKey as keyof T] : null) : keyExists ? String(data[column.columnKey as keyof T]) : null}
                        </TableCell>
                    );
                })}
            </TableRow>
        );
    }

    return (
        <TableContainer>
             <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TablePagination {...paginationProps}/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.length ? data.map(renderTableRow) : (
                        <TableRow>
                            <TableCell>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <ClearIcon/>
                                    <Typography>No data</Typography>
                                </Box>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination {...paginationProps}/>
                    </TableRow>
                </TableFooter>
             </Table>
        </TableContainer>  
    )
}

export default CustomTable;