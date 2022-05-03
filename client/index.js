import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import { Provider } from 'react-redux';
import App from './App';
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , 
  document.getElementById('app')
);

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app'),
// );