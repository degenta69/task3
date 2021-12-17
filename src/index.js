import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './custom.scss';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 767,
      lg: 1024,
      lg0:1097,
      lg1:1170,
      lg2:1189,
      lg3:1243,
      xl: 1280,
      xl2:1390,
      xxl: 1440,
    }
  },
})


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
