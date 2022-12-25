import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ErrorPageProps {
    children: React.ReactNode;
}

interface ErrorPageState {
    hasError: boolean;
}

export class ErrorPage extends Component<ErrorPageProps, ErrorPageState> {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    componentDidCatch(error: Error, _: React.ErrorInfo): void {
        console.warn('error occurred!', error);

        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ErrorOutlineIcon sx={{fontSize: '180px'}}/>
                    <Typography variant='h5'>Oops... Seems like an error occurred!</Typography>
                </Box>
            )
        } 
        return this.props.children;
    }
}

export default ErrorPage