import { MemoryAction } from '../actions';
import { MemoryState, GameStatus } from '../types/index';

import {
  START_GAME,
  END_GAME,
  FLIP_TILE,
  TOGGLE_IS_WAITING,
  MATCH_CHECK,
  INCREMENT_TRIES,
} from '../constants/index';

const initialState = {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0,
  status: GameStatus.NotStarted,
};

export default function memoryReducer(
  state: MemoryState = initialState,
  action: MemoryAction
): MemoryState {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isWaiting: false,
        numberOfTries: 0,
        status: GameStatus.Ongoing,
        tiles: [...action.tiles],
      };

    case END_GAME:
      return {
        ...state,
        status: GameStatus.Ended,
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

    case INCREMENT_TRIES:
      return {
        ...state,
        numberOfTries: state.numberOfTries + 1,
      };
    default:
      return state;
  }
}
