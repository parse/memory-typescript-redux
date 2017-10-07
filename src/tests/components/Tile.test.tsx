import * as React from 'react';
import Tile from '../../components/Tile';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tile = {
    image: 'lol.png',
    tileKey: 1,
    flipped: false,
    matched: false,
  };

  const tree = renderer
    .create(<Tile tile={tile} index={1} onClickTile={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
