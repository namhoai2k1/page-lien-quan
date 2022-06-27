import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Typography from './style/Typography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Typography />
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
