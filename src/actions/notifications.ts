import * as constants from '../constants/notifications';
import { Severity } from '../types/index';

export interface ShowNotification {
  type: constants.SHOW_NOTIFICATION;
  message: String;
  severity: Severity;
  uid: number;
}

export function showNotification(
  message: String,
  severity: Severity,
  uid?: number
): ShowNotification {
  return {
    uid: uid || Date.now(),
    type: constants.SHOW_NOTIFICATION,
    message,
    severity,
  };
}
export interface HideNotification {
  type: constants.HIDE_NOTIFICATION;
  uid: number;
}

export function hideNotification(uid: number): HideNotification {
  return {
    uid,
    type: constants.HIDE_NOTIFICATION,
  };
}

export type NotificationAction = ShowNotification | HideNotification;
