import PageLayout from 'layout/PageLayout';
import PageNotFound from 'layout/System/PageNotFound';
import PostPage from 'pages/Post';
import UserPage from 'pages/User';
import UsersPage from 'pages/Users';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routeObjects';

export const CustomRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path={routes.index} element={<PageLayout/>}>
                <Route path={routes.users.index} element={<UsersPage/>}/>
                <Route path={routes.users.user} element={<UserPage/>}/>
                <Route path={routes.users.posts.index} element={<PostPage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
}

export default CustomRouter;