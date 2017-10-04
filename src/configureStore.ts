import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState, GameStatus } from './types/index';
import rootSaga from './sagas/index';
import { memoryReducer } from './reducers/index';

const defaultState = {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0,
  status: GameStatus.NotStarted,
};

export default function configureStore(
  rootReducer?: any,
  saga?: any,
  initialState?: StoreState
) {
  rootReducer = memoryReducer;
  saga = rootSaga;
  initialState = defaultState;

  const sagaMiddleware = createSagaMiddleware();

  const internalStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(saga);

  return internalStore;
}
