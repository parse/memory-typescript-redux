import { takeEvery, put, select, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { MemoryAction } from '../actions/memory';
import {
  isGameOver,
  isInWaitingState,
  hasSelectedTwoTiles,
  flippedUnmatchedTiles,
} from '../selectors';
import { Severity, StoreState } from '../types/index';

import * as memoryConstants from '../constants/memory';
import * as memoryActions from '../actions/memory';
import * as notificationActions from '../actions/notification';

function* checkCardsForMatch() {
  const selectedCards = yield select<StoreState>(state =>
    flippedUnmatchedTiles(state.memory)
  );
  const [card1, card2] = selectedCards;

  return card1.tileKey === card2.tileKey;
}

function* gameSequence(action: MemoryAction) {
  const selectedTwoTiles = yield select<StoreState>(innerState =>
    hasSelectedTwoTiles(innerState.memory)
  );
  if (selectedTwoTiles) {
    yield put(memoryActions.toggleIsWaiting(true));
  }

  const isWaiting = yield select<StoreState>(innerState =>
    isInWaitingState(innerState.memory)
  );
  if (isWaiting) {
    yield put(memoryActions.incrementTries());
    yield call(delay, 1000);

    const tilesFlipped = yield select<StoreState>(innerState =>
      flippedUnmatchedTiles(innerState.memory)
    );

    const matchFound = yield checkCardsForMatch();
    if (matchFound) {
      yield put(
        notificationActions.showNotification('Matched!', Severity.Success)
      );
    } else {
      yield put(
        notificationActions.showNotification(
          'Better luck next time!',
          Severity.Error
        )
      );
    }

    yield put(memoryActions.matchCheck(tilesFlipped));

    const gameOver = yield select<StoreState>(innerState =>
      isGameOver(innerState.memory)
    );
    if (gameOver) {
      yield put(memoryActions.endGame());
    }
  }
}

export default function* root() {
  return yield all([takeEvery(memoryConstants.FLIP_TILE, gameSequence)]);
}
