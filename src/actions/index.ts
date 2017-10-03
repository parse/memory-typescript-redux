import * as constants from '../constants';
import { getTiles } from '../data/randomTiles';
import { Tile } from '../types/index';

export interface StartGame {
  type: constants.START_GAME;
  tiles: Array<Tile>;
}

export function startGame(): StartGame {
  const tiles = getTiles();

  return {
    type: constants.START_GAME,
    tiles,
  };
}

export interface EndGame {
  type: constants.END_GAME;
}

export function endGame(): EndGame {
  return {
    type: constants.END_GAME,
  };
}

export interface FlipTile {
  type: constants.FLIP_TILE;
  index: number;
  tile: Tile;
}

export function flipTile(index: number, tile: Tile): FlipTile {
  return {
    type: constants.FLIP_TILE,
    index,
    tile,
  };
}

export interface ToggleIsWaiting {
  type: constants.TOGGLE_IS_WAITING;
  isWaiting: Boolean;
}

export function toggleIsWaiting(isWaiting: Boolean): ToggleIsWaiting {
  return {
    type: constants.TOGGLE_IS_WAITING,
    isWaiting,
  };
}

export interface IncrementTries {
  type: constants.INCREMENT_TRIES;
}

export function incrementTries(): IncrementTries {
  return {
    type: constants.INCREMENT_TRIES,
  };
}

export interface MatchCheck {
  type: constants.MATCH_CHECK;
  flippedTiles: Array<Tile>;
}

export function matchCheck(flippedTiles: Array<Tile>): MatchCheck {
  return {
    type: constants.MATCH_CHECK,
    flippedTiles,
  };
}

export type MemoryAction =
  | StartGame
  | EndGame
  | FlipTile
  | ToggleIsWaiting
  | IncrementTries
  | MatchCheck;
