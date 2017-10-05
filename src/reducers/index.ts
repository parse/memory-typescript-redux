import { combineReducers } from 'redux';
import memoryReducer from './memory';
import notificationReducer from './notification';
import { StoreState } from '../types/index';

const appReducer = combineReducers({
  memory: memoryReducer,
  notification: notificationReducer,
});

const rootReducer = (state: StoreState, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
