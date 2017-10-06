import { expect } from 'chai';
const df = require('deep-freeze-strict');
import { Severity } from '../../types/index';

import * as notificationTypes from '../../constants/notification';
import * as memoryTypes from '../../constants/memory';

import notificationReducer from '../../reducers/notification';

describe('Reducers', () => {
  describe('memory reducer', () => {
    it('should add notifications when sending SHOW_NOTIFICATION action', () => {
      var INITIAL_STATE = {
        notifications: [],
      };

      var action = {
        uid: 1,
        type: notificationTypes.SHOW_NOTIFICATION,
        severity: Severity.Success,
        message: 'Hello',
      };

      var res = notificationReducer(df(INITIAL_STATE), df(action));

      expect(res.notifications.length).to.equal(1);
    });

    it('should remove notifications when sending HIDE_NOTIFICATION action', () => {
      var INITIAL_STATE = {
        notifications: [
          {
            uid: 1,
            severity: Severity.Success,
            message: 'Hello',
          },
        ],
      };

      var action = {
        type: notificationTypes.HIDE_NOTIFICATION,
        uid: 1,
      };

      var res = notificationReducer(df(INITIAL_STATE), df(action));

      expect(res.notifications.length).to.equal(0);
    });

    it('should remove all notifications when sending START_GAME action', () => {
      var INITIAL_STATE = {
        notifications: [
          {
            uid: 1,
            severity: Severity.Success,
            message: 'Hello',
          },
          {
            uid: 2,
            severity: Severity.Success,
            message: 'Hello 2',
          },
        ],
      };

      var action = {
        type: memoryTypes.START_GAME,
      };

      var res = notificationReducer(df(INITIAL_STATE), df(action));

      expect(res.notifications.length).to.equal(0);
    });
  });
});
