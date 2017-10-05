import { takeEvery, put, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { HideNotification } from '../actions';

import * as constants from '../constants';
import * as actions from '../actions';

function* notificationSequence(action: HideNotification) {
  yield call(delay, 3000);
  yield put(actions.hideNotification(action.uid));
}

export default function* root() {
  return yield all([
    takeEvery(constants.SHOW_NOTIFICATION, notificationSequence),
  ]);
}
