import * as React from 'react';

import { connect } from 'react-redux';
import { StoreState, Notification as NotificationType } from '../types/index';
import Notification from './../components/Notification';

interface NotificationsProps {
  notification: NotificationType;
}

class NotificationCentre extends React.Component<NotificationsProps, {}> {
  render() {
    const { notification } = this.props;

    if (!notification) {
      return null;
    }

    return (
      <div className={'notificationCenter'}>
        <Notification notification={notification} />
      </div>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    notification:
      state.notification &&
      state.notification.notifications &&
      state.notification.notifications[0],
  };
}

export default connect(mapStateToProps)(NotificationCentre as any);
