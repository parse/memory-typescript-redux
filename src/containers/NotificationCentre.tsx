import * as React from 'react';

import { connect } from 'react-redux';
import { StoreState, Notification as NotificationType } from '../types/index';
import Notification from './../components/Notification';

interface NotificationsProps {
  notifications: Array<NotificationType>;
}

class NotificationCentre extends React.Component<NotificationsProps, {}> {
  render() {
    const { notifications } = this.props;

    console.log(notifications);

    return (
      <div className={'notificationCenter'}>
        {notifications.map(notification => (
          <Notification key={notification.uid} notification={notification} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    notifications: state.notification.notifications,
  };
}

export default connect(mapStateToProps)(NotificationCentre as any);
