import * as React from 'react';
import { Severity, Notification as NotificationType } from '../types/index';

interface NotificationProps {
  notification: NotificationType;
}

export default class Notification extends React.Component<
  NotificationProps,
  {}
> {
  render() {
    const { notification } = this.props;

    if (notification.severity === Severity.Info) {
      return <strong style={{ color: 'red' }}>{notification.message}</strong>;
    } else if (notification.severity === Severity.Success) {
      return <strong style={{ color: 'green' }}>{notification.message}</strong>;
    } else if (notification.severity === Severity.Error) {
      return <strong style={{ color: 'red' }}>{notification.message}</strong>;
    }

    return null;
  }
}
