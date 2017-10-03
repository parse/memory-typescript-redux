import * as _ from 'lodash';

export const isGameOver = (state: any) => {
  const flippedTotal = _.filter(
    state.tiles,
    _.matches({ flipped: true, matched: true })
  );

  return flippedTotal.length === state.tiles.length;
};

export const hasSelectedTwoTiles = (state: any) => {
  return flippedTiles(state).length >= 2;
};

export const flippedTiles = (state: any) => {
  return _.filter(state.tiles, _.matches({ flipped: true, matched: false }));
};

export const isInWaitingState = (state: any) => state.isWaiting;
