import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { APIProvider } from './api';
import CustomRouter from './routes/CustomRouter';
import { StoreProvider } from './stores';
import { MyThemeProvider } from './theme';

function App() {
    return (
        <BrowserRouter>
            <APIProvider>
                <StoreProvider>
                    <MyThemeProvider>
                        <CustomRouter/>
                    </MyThemeProvider>
                </StoreProvider>
            </APIProvider>
        </BrowserRouter>
    );
}

export default App;
