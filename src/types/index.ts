export interface StoreState {
  tiles: Array<Tile>;
  isWaiting: Boolean;
  numberOfTries: number;
}

export interface Tile {
  image: String;
  tileKey: number;
  flipped: Boolean;
  matched: Boolean;
}
