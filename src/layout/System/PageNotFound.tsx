import { Box, Button, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/routeObjects';

export const PageNotFound = (): JSX.Element => {
    const navigate = useNavigate();

    const handleRedirectToMainPage = () => navigate(routes.index);

    return (
        <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <SearchOffIcon sx={{fontSize: '180px'}}/>
            <Typography variant='h3' sx={{marginBottom: '20px'}}>Requested page not found!</Typography>
            <Button variant='contained' onClick={handleRedirectToMainPage}>
                Back to Main Page
            </Button>
        </Box>
    );
}

export default PageNotFound;