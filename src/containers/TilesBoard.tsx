import * as React from 'react';
import * as actions from '../actions/memory';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tile as TileType, StoreState } from '../types/index';

import Tile from '../components/Tile';

interface TilesBoardProps {
  onHandleClickTile: () => void;
  toggleIsWaiting: (toggle: Boolean) => void;
  matchCheck: (tiles: Array<TileType>) => void;
  flipTile: (index: number, tile: TileType) => void;
  incrementTries: () => void;
  numberOfTries: number;
  tiles: Array<TileType>;
  isWaiting: Boolean;
}

class TilesBoard extends React.Component<TilesBoardProps, {}> {
  onHandleClickTile(tile: TileType, index: number) {
    const { flipTile, isWaiting } = this.props;

    if (isWaiting) {
      return;
    }

    flipTile(index, tile);
  }

  renderTiles() {
    const { tiles } = this.props;

    return tiles.map((tile, i) => {
      return (
        <Tile
          tile={tile}
          key={i}
          index={i}
          onClickTile={() => this.onHandleClickTile(tile, i)}
        />
      );
    });
  }

  render() {
    return (
      <div className="container gameboard">
        <div className="row">{this.renderTiles()}</div>
      </div>
    );
  }
}

function mapStateToProps(state: StoreState) {
  const { tiles, isWaiting } = state.memory;

  return {
    tiles,
    isWaiting,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.MemoryAction>) {
  const { toggleIsWaiting, incrementTries, matchCheck, flipTile } = actions;

  return bindActionCreators(
    {
      toggleIsWaiting,
      incrementTries,
      matchCheck,
      flipTile,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TilesBoard as any);
