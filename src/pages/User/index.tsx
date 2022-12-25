import React from 'react'
import { observer } from 'mobx-react';
import { Avatar, Skeleton, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import manPic from 'assets/man-image.png';
import girlPic from 'assets/girl-image.png';
import PageWithPagination, { PageWithPaginationProps } from 'layout/PageWithPagination';
import { UserParams } from 'routes/types';
import { PostModel } from 'api/models/PostModel';
import { routes } from 'routes/routeObjects';
import UserInfo from 'components/UserInfo';
import CustomTable from 'components/CustomTable';
import { postsColumns } from './columns';
import { useStore } from 'stores';


export const UserPage = observer((props: PageWithPaginationProps): JSX.Element => {
    const navigate = useNavigate();
    const {setPagination, ...rest} = props;

    const {userId} = useParams<UserParams>();
    const {userStore, postStore} = useStore();

    React.useEffect(() => {
        if (userId) {
            void userStore.findUser(Number(userId));
            postStore.fetchPosts(Number(userId), {page: rest.page + 1, per_page: rest.rowsPerPage}).then(pagination => {
                setPagination(prev => ({...prev, count: pagination.total_amount}));
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, rest.page, rest.rowsPerPage]);

    const redirectToPostPage = (data: PostModel): void => navigate(routes.users.posts.open(Number(userId), data.id));

    return !userStore.selectedUser ? (
        <>
            <Skeleton sx={{marginBottom: '20px'}} variant="circular" width={60} height={60}/>
            <Skeleton variant="rounded" width={400} height={150}/>
        </>
    ) : (
    	<>
            <Avatar src={userStore.selectedUser?.gender === 'male' ? manPic : girlPic}/>
            <UserInfo sx={{marginTop: '20px'}} user={userStore.selectedUser}/>
            <Typography sx={{marginTop: '20px'}} variant='h4'>Posts:</Typography>
            <CustomTable columns={postsColumns} data={postStore.posts} onRowClick={redirectToPostPage} paginationProps={rest}/>
        </>
    )
});

export default PageWithPagination(UserPage);