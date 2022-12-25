import { Box } from '@mui/material';
import Sidebar from 'layout/Sidebar';
import ErrorPage from 'layout/System/ErrorPage';
import { Outlet } from 'react-router-dom';


export const PageLayout = (): JSX.Element => {
    return (
        <Box sx={{display: 'flex', height: '100vh'}}>
            <Sidebar/>
            <Box sx={{padding: '40px 20px 40px 60px', flexGrow: 1, overflow: 'auto'}}>
                <ErrorPage>
                    <Outlet/>
                </ErrorPage>
            </Box>
        </Box>
    )
}

export default PageLayout;