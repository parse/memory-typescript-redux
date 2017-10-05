import { takeEvery, put, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { HideNotification, hideNotification } from '../actions/notifications';

import * as notificationConstants from '../constants/notifications';

function* notificationSequence(action: HideNotification) {
  yield call(delay, 3000);
  yield put(hideNotification(action.uid));
}

export default function* root() {
  return yield all([
    takeEvery(notificationConstants.SHOW_NOTIFICATION, notificationSequence),
  ]);
}
