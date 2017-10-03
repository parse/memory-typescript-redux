import * as React from 'react';
import * as actions from '../actions';
import * as _ from 'lodash';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tile as TileType } from '../types/index';
import { StoreState } from '../types/index';

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
  componentDidUpdate() {
    const {
      tiles,
      toggleIsWaiting,
      matchCheck,
      incrementTries,
      isWaiting,
    } = this.props;

    const flippedTiles = _.filter(
      tiles,
      _.matches({ flipped: true, matched: false })
    );

    if (flippedTiles.length >= 2) {
      toggleIsWaiting(true);

      if (isWaiting) {
        incrementTries();

        setTimeout(() => {
          matchCheck(flippedTiles);
        }, 500);
      }
    }
  }

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
  const { tiles, isWaiting } = state;

  return {
    tiles: tiles,
    isWaiting: isWaiting,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.MemoryAction>) {
  const { toggleIsWaiting, incrementTries, matchCheck, flipTile } = actions;

  return bindActionCreators(
    {
      toggleIsWaiting: toggleIsWaiting,
      incrementTries: incrementTries,
      matchCheck: matchCheck,
      flipTile: flipTile,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TilesBoard as any);
