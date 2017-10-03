import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

import { memoryReducer } from './reducers/index';
import configureStore from './configureStore';
import rootSaga from './sagas/index';

import './styles/css/index.css';

const store = configureStore(memoryReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
