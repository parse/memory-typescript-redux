import { NotificationAction } from '../actions/notification';
import { MemoryAction } from '../actions/memory';

import { NotificationState } from '../types/index';
import * as update from 'immutability-helper';

import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from '../constants/notification';

import { START_GAME } from '../constants/memory';

const initialState = {
  notifications: [],
};

export default function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationAction | MemoryAction
): NotificationState {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      const newEntity = {
        uid: action.uid,
        message: action.message,
        severity: action.severity,
      };

      const change = state.notifications
        ? {
            $push: [newEntity],
          }
        : {
            $set: [newEntity],
          };

      return update(state, {
        notifications: change,
      });
    case HIDE_NOTIFICATION:
      const notificationIndex = state.notifications.findIndex(
        item => item.uid === action.uid
      );

      // Could not find entry
      if (notificationIndex === -1) {
        return state;
      }

      return update(state, {
        notifications: {
          $splice: [[notificationIndex, 1]],
        },
      });
    case START_GAME:
      return {
        notifications: [],
      };
    default:
      return state;
  }
}
