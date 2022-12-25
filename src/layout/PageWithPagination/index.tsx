/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

type RowsPerPageOption = 10 | 20 | 50 | 100;

interface IPagintaionState {
    page: number,
	count: number,
	rowsPerPage: RowsPerPageOption,
	readonly rowsPerPageOptions: RowsPerPageOption[],
}

export interface PageWithPaginationProps extends IPagintaionState {
    onPageChange: (_: React.MouseEvent, page: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent) => void;
    setPagination: React.Dispatch<React.SetStateAction<IPagintaionState>>;
}

function PageWithPagination<P>(WrappedComponent: React.ComponentType<P>): React.FC<SubtractKeys<P, PageWithPaginationProps>> {
    return function (props: P): JSX.Element {
        const [pagination, setPagination] = React.useState<IPagintaionState>({page: 0, count: 0, rowsPerPage: 10, rowsPerPageOptions: [10, 20, 50, 100]});

        const handlePageChange = (_: React.MouseEvent | null, page: number): void => {
            setPagination((prev) => ({...prev, page}));
        }

        const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
            setPagination((prev) => ({...prev, rowsPerPage: Number(event.target.value) as RowsPerPageOption}));
        }

        return (
            <WrappedComponent 
                page={pagination.page} 
                count={pagination.count}
                rowsPerPage={pagination.rowsPerPage}
                rowsPerPageOptions={pagination.rowsPerPageOptions}
                onPageChange={handlePageChange} 
                onRowsPerPageChange={handleRowsPerPageChange}
                setPagination={setPagination}
                {...props}
                />
        );
    }
    
}

export default PageWithPagination