import React from 'react';
import { hydrate } from 'react-dom';
import { createGenerateClassName, MuiThemeProvider } from '@material-ui/core/styles'
import App from './Components/App'
import theme from './theme';
import { JssProvider } from 'react-jss/';

const generateClassName = createGenerateClassName();

hydrate(
    <JssProvider generateId={generateClassName}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </JssProvider>,
    document.getElementById('root'),
    () => {
        document.getElementById('jss-styles').remove()
    }
);
