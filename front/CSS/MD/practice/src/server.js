import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss/';
import { createGenerateClassName, MuiThemeProvider } from '@material-ui/core/styles';
import reload from 'reload';
import App from './Components/App';
import theme from './theme';

const app = express();

const port = 3000;
const dev = process.env.NODE_ENV === 'development';

app.use(express.static('public'));

if (dev) {
    reload(app);
}

app.use((req, res) => {
    const sheetsRegistry = new SheetsRegistry();

    const generateClassName = createGenerateClassName();

    const sheetsManager = new Map();

    const html = renderToString(
        <JssProvider registry={sheetsRegistry} generateId={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                <App />
            </MuiThemeProvider>
        </JssProvider>
    );

    const css = sheetsRegistry.toString();

    res.send(`
        <!DOCTYPE html>
        <html lang='ko'>

        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
            <title>React App</title>
            <style id='jss-styles'>${css}</style>
        </head>

        <body>
            <div id='root'>${html}</div>
            <script src='main.js' async></script>
            ${dev ? `<script src='/reload/reload.js' anync></script>` : '' }
        </body>

        </html>
    `)
})

app.listen(port, () => console.log(`http://localhost:${port}`));