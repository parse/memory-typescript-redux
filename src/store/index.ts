import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from 'redux-persist';

import { StoreState } from './../types/index';
import gameSaga from './../sagas/game';
import notificationSaga from './../sagas/notification';
import rootReducer from './../reducers';

export default function configureStore(initialState?: StoreState) {
  const sagaMiddleware = createSagaMiddleware();

  const internalStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware), autoRehydrate())
  );

  sagaMiddleware.run(gameSaga);
  sagaMiddleware.run(notificationSaga);

  persistStore(internalStore);

  return internalStore;
}
