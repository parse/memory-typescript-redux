import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { expectSaga } from 'redux-saga-test-plan';

import { Severity } from '../../types/index';
import { default as notificationSaga } from './../../sagas/notification';
import * as actions from '../../actions/notification';

describe('Notification saga', () => {
  it('delay and hide notifications', () => {
    return (
      expectSaga(notificationSaga)
        .provide([[call(delay, 3000)]])
        .put(actions.hideNotification(1))
        // Dispatch any actions that the saga will `take`.
        .dispatch(actions.showNotification('Matched!', Severity.Success, 1))
        // Start the test. Returns a Promise.
        .run()
    );
  });
});
