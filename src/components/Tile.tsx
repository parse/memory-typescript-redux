import * as React from 'react';
import { Tile as TileType } from '../types/index';

interface TileProps {
  index: number;
  onClickTile: (tile: TileType, index: number) => void;
  tile: TileType;
}

class Tile extends React.Component<TileProps, {}> {
  render() {
    const { tile, index, onClickTile } = this.props;
    let classFlipped = tile.flipped
      ? 'tile effect__click flipped'
      : 'tile effect__click';

    const tileBackgroundImage = {
      backgroundImage: 'url(' + tile.image + ')',
    };

    return (
      <div
        className={classFlipped}
        onClick={() => {
          onClickTile(tile, index);
        }}
      >
        <div className="tile__front" />
        <div className="tile__back" style={tileBackgroundImage} />
      </div>
    );
  }
}

export default Tile;
