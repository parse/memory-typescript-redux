import * as React from 'react';
import NoMatch from '../../components/NoMatch';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<NoMatch />).toJSON();
  expect(tree).toMatchSnapshot();
});
