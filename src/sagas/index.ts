import * as _ from 'lodash';

import { takeEvery, fork, put, select, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { StoreState } from '../types/index';
import { MemoryAction } from '../actions';

import * as constants from '../constants';
import * as actions from '../actions';

function* gameSequence(action: MemoryAction) {
  const state = yield select();

  const flippedTiles = _.filter(
    state.tiles,
    _.matches({ flipped: true, matched: false })
  );

  if (flippedTiles.length >= 2) {
    yield put(actions.toggleIsWaiting(true));
  }

  const isWaiting = yield select(
    (innerState: StoreState) => innerState.isWaiting
  );

  if (isWaiting) {
    yield put(actions.incrementTries());
    yield call(delay, 1000);
    yield put(actions.matchCheck(flippedTiles));
  }
}

export default function* root() {
  return yield all([takeEvery(constants.FLIP_TILE, gameSequence)]);
}
