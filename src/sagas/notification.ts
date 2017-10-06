import { takeEvery, put, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { HideNotification, hideNotification } from '../actions/notification';

import * as notificationConstants from '../constants/notification';

function* notificationSequence(action: HideNotification) {
  yield call(delay, 3000);
  yield put(hideNotification(action.uid));
}

export default function* root() {
  return yield all([
    takeEvery(notificationConstants.SHOW_NOTIFICATION, notificationSequence),
  ]);
}
