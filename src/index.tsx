import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import configureStore from './store/';

import './styles/css/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store as any}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
