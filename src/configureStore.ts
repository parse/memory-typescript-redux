import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from './types/index';
import gameSaga from './sagas/game';
import notificationSaga from './sagas/notification';
import rootReducer from './reducers';

export default function configureStore(initialState?: StoreState) {
  const sagaMiddleware = createSagaMiddleware();

  const internalStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(gameSaga);
  sagaMiddleware.run(notificationSaga);

  return internalStore;
}
