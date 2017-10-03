export enum GameStatus {
  NotStarted = 0,
  Ongoing = 1,
  Ended = 2,
}

export interface StoreState {
  tiles: Array<Tile>;
  isWaiting: Boolean;
  numberOfTries: number;
  status: GameStatus;
}

export interface Tile {
  image: String;
  tileKey: number;
  flipped: Boolean;
  matched: Boolean;
}
