import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  GenericStoreEnhancer,
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

import { memoryReducer } from './reducers/index';
import { StoreState, GameStatus } from './types/index';
import rootSaga from './sagas/index';

import './styles/css/index.css';

function configureStore(initialState: StoreState, rootReducer: any, saga: any) {
  const sagaMiddleware = createSagaMiddleware();

  const internalStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(saga);

  return internalStore;
}

const startState = {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0,
  status: GameStatus.NotStarted,
};

const store = configureStore(startState, memoryReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
