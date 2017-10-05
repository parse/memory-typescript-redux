export enum GameStatus {
  NotStarted = 0,
  Ongoing = 1,
  Ended = 2,
}

export enum Severity {
  Info,
  Success,
  Error,
}

export interface StoreState {
  readonly memory: MemoryState;
  readonly notification: NotificationState;
}

export interface MemoryState {
  readonly tiles: Array<Tile>;
  readonly isWaiting: Boolean;
  readonly numberOfTries: number;
  readonly status: GameStatus;
}

export interface NotificationState {
  readonly notifications: Array<Notification>;
}

export interface Tile {
  readonly image: String;
  readonly tileKey: number;
  readonly flipped: Boolean;
  readonly matched: Boolean;
}

export interface Notification {
  readonly uid: number;
  readonly message: String;
  readonly severity: Severity;
}
