import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const font = "'Lato', sans-serif";


const theme = createTheme({
  palette: {
    primary: {
      main: '#007a73',
    },
    secondary: {
      main: '#231f20',
    },
  },
  typography: {
    fontFamily: font,
    h4:{
      fontWeight: 700,
    },
    button:{
      fontWeight: 600,
    },
  },
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
