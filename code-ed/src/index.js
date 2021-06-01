import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './Theme'
import './styles.css'
import {Provider} from 'react-redux'
import store from './Redux/store'



ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
     </Provider>
    ,
  document.getElementById('root')
);
