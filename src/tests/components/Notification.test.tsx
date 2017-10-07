import * as React from 'react';
import Notification from '../../components/Notification';
import * as renderer from 'react-test-renderer';
import { Severity } from '../../types/index';

it('renders correctly', () => {
  const notification = {
    uid: 1,
    severity: Severity.Error,
    message: 'Lol',
  };

  const tree = renderer
    .create(<Notification notification={notification} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
