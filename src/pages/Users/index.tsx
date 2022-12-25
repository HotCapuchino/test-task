import React from 'react'
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { usersColumns } from './columns';
import PageWithPagination, { PageWithPaginationProps } from 'layout/PageWithPagination';
import { useStore } from 'stores';
import { UserModel } from 'api/models/UserModel';
import { routes } from 'routes/routeObjects';
import CustomTable from 'components/CustomTable';


export const UsersPage = observer((props: PageWithPaginationProps): JSX.Element => {
	const navigate = useNavigate();
	const {setPagination, ...rest} = props;

	const {userStore} = useStore();

	React.useEffect(() => {
		userStore.fetchUsers({page: rest.page + 1, per_page: rest.rowsPerPage}).then(pagination => {
			setPagination(prev => ({...prev, count: pagination.total_amount}));
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rest.page, rest.rowsPerPage]);
	
	const redirectToUserPage = (data: UserModel): void => navigate(routes.users.open(data.id));

    return <CustomTable data={userStore.users} columns={usersColumns} onRowClick={redirectToUserPage} paginationProps={rest}/>;
});

export default PageWithPagination(UsersPage);