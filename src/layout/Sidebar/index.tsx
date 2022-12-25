import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, MenuItem, MenuList, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/routeObjects';


export const Sidebar = (): JSX.Element => {
    const navigate = useNavigate(); 
    
    const [open, setOpen] = React.useState<boolean>(false);

    const toggleSidebar = () => setOpen(prev => !prev);
    
    const openUsersPage = () => {
        toggleSidebar();
        navigate(routes.users.index);
    }

    return (
        <Box sx={{padding: '10px', backgroundColor: 'lightseagreen', color: 'white'}}>
            <Button onClick={toggleSidebar}>
                {open ? <CloseIcon className='sidebar-icon' /> : <MenuIcon className='sidebar-icon'/>}
            </Button>
            {open && (
                <MenuList>
                    <MenuItem onClick={openUsersPage}>
                        <PeopleOutlineIcon sx={{marginRight: '10px'}}/>
                        <Typography>Users</Typography>
                    </MenuItem>
                </MenuList>
            )}
        </Box>
    );
}

export default Sidebar;