import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { ShowNotification, hideNotification } from '../actions/notification';

import * as notificationConstants from '../constants/notification';

export function* notificationSequence(action: ShowNotification) {
  yield call(delay, 3000);
  yield put(hideNotification(action.uid));
}

export default function* root() {
  return yield takeEvery(
    notificationConstants.SHOW_NOTIFICATION,
    notificationSequence
  );
}
