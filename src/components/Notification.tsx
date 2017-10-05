import * as React from 'react';
import { Notification as NotificationType } from '../types/index';

interface NotificationProps {
  notification: NotificationType;
}

class Notification extends React.Component<NotificationProps, {}> {
  render() {
    const { notification } = this.props;

    return <strong>{notification.message}</strong>;
  }
}

export default Notification;
