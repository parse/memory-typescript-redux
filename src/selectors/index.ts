import * as _ from 'lodash';

export const isGameOver = (state: any) => {
  const flippedTotal = flippedMatchedTiles(state);

  return flippedTotal.length === state.tiles.length;
};

export const hasSelectedTwoTiles = (state: any) => {
  return flippedUnmatchedTiles(state).length >= 2;
};

export const flippedUnmatchedTiles = (state: any) => {
  return _.filter(state.tiles, _.matches({ flipped: true, matched: false }));
};

export const flippedMatchedTiles = (state: any) => {
  return _.filter(state.tiles, _.matches({ flipped: true, matched: true }));
};

export const isInWaitingState = (state: any) => state.isWaiting;
