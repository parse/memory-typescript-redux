import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import { memoryReducer } from './reducers/index';
import { StoreState } from './types/index';

import './styles/css/index.css';

const store = createStore<StoreState>(memoryReducer, {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
