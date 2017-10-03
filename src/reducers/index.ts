import { MemoryAction } from '../actions';
import { StoreState } from '../types/index';
import * as types from '../constants';

import {
  START_GAME,
  FLIP_TILE,
  TOGGLE_IS_WAITING,
  MATCH_CHECK,
  INCREMENT_TRIES,
} from '../constants/index';

export function memoryReducer(
  state: StoreState,
  action: MemoryAction
): StoreState {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isWaiting: false,
        numberOfTries: 0,
        tiles: [...action.tiles],
      };

    case FLIP_TILE:
      const { index, tile } = action;

      const updatedTile = {
        ...tile,
        flipped: true,
      };

      return {
        ...state,
        tiles: [
          ...state.tiles.slice(0, index),
          updatedTile,
          ...state.tiles.slice(index + 1),
        ],
      };

    case TOGGLE_IS_WAITING:
      return {
        ...state,
        isWaiting: action.isWaiting,
      };

    case MATCH_CHECK:
      const { tiles } = state;

      if (action.flippedTiles[0].tileKey === action.flippedTiles[1].tileKey) {
        let newTiles = tiles.map(t => {
          if (t.flipped === true && t.matched === false) {
            return {
              ...t,
              matched: true,
            };
          } else {
            return t;
          }
        });

        return {
          ...state,
          tiles: newTiles,
          isWaiting: false,
        };
      } else {
        let newTiles = tiles.map(t => {
          if (t.flipped === true && t.matched === false) {
            return {
              ...t,
              flipped: false,
            };
          } else {
            return t;
          }
        });

        return {
          ...state,
          tiles: newTiles,
          isWaiting: false,
        };
      }

    case types.INCREMENT_TRIES:
      return {
        ...state,
        numberOfTries: state.numberOfTries + 1,
      };

    default:
      return state;
  }
}
