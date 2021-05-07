import React from 'react';
import { render } from 'react-dom';
import App from './Components/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import red from '@material-ui/core/colors/red';
import { amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main:amber.A400,
            light: amber[200],
            dark: amber[800]
        },
        type: 'dark'
    }
});

render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
   , document.getElementById('root')
);
