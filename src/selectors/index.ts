import * as _ from 'lodash';

export const isGameOver = (state: any) => {
  const flippedTotal = _.filter(
    state.tiles,
    _.matches({ flipped: true, matched: true })
  );

  return flippedTotal.length === state.tiles.length;
};

export const isInWaitingState = (state: any) => state.isWaiting;
