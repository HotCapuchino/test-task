import React from 'react';
import { Alert, Snackbar} from '@mui/material';

interface NotificationSnackbarProps {
    children: React.ReactNode;
}

const ErrorSnackbar = (props: NotificationSnackbarProps): JSX.Element => {
    const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(true);

    const handleClose = (): void => {
        setSnackbarOpen(false);
    }

    return (
        <Snackbar open={snackbarOpen} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {props.children}
            </Alert>
        </Snackbar>
    );
}

export default ErrorSnackbar;