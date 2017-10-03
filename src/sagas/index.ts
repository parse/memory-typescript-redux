import { takeEvery, put, select, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { MemoryAction } from '../actions';
import {
  isGameOver,
  isInWaitingState,
  hasSelectedTwoTiles,
  flippedUnmatchedTiles,
} from '../selectors';

import * as constants from '../constants';
import * as actions from '../actions';

function* gameSequence(action: MemoryAction) {
  const selectedTwoTiles = yield select(innerState =>
    hasSelectedTwoTiles(innerState)
  );
  if (selectedTwoTiles) {
    yield put(actions.toggleIsWaiting(true));
  }

  const isWaiting = yield select(innerState => isInWaitingState(innerState));
  if (isWaiting) {
    yield put(actions.incrementTries());
    yield call(delay, 1000);

    const tilesFlipped = yield select(innerState =>
      flippedUnmatchedTiles(innerState)
    );
    yield put(actions.matchCheck(tilesFlipped));

    const gameOver = yield select(innerState => isGameOver(innerState));
    if (gameOver) {
      yield put(actions.endGame());
    }
  }
}

export default function* root() {
  return yield all([takeEvery(constants.FLIP_TILE, gameSequence)]);
}
