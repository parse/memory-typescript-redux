import * as _ from 'lodash';
import { MemoryState } from '../types/index';

export const isGameOver = (state: MemoryState) => {
  const flippedTotal = flippedMatchedTiles(state);

  return flippedTotal.length === state.tiles.length;
};

export const hasSelectedTwoTiles = (state: MemoryState) => {
  return flippedUnmatchedTiles(state).length >= 2;
};

export const flippedUnmatchedTiles = (state: MemoryState) => {
  return _.filter(state.tiles, _.matches({ flipped: true, matched: false }));
};

export const flippedMatchedTiles = (state: MemoryState) => {
  return _.filter(state.tiles, _.matches({ flipped: true, matched: true }));
};

export const isInWaitingState = (state: MemoryState) => state.isWaiting;
