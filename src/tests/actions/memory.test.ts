import { expect } from 'chai';
import {
  START_GAME,
  END_GAME,
  FLIP_TILE,
  TOGGLE_IS_WAITING,
  INCREMENT_TRIES,
  MATCH_CHECK,
} from '../../constants/memory';
import {
  startGame,
  StartGame,
  endGame,
  EndGame,
  flipTile,
  FlipTile,
  toggleIsWaiting,
  ToggleIsWaiting,
  incrementTries,
  IncrementTries,
  matchCheck,
  MatchCheck,
} from '../../actions/memory';

describe('Actions', () => {
  describe('startGame()', () => {
    let action: StartGame;
    beforeEach(() => {
      action = startGame();
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(START_GAME);
    });

    it('has the correct payload', () => {
      expect(action.tiles).to.be.instanceof(Array);
      expect(action.tiles).to.have.length.above(0);
    });
  });
  describe('endGame()', () => {
    let action: EndGame;
    beforeEach(() => {
      action = endGame();
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(END_GAME);
    });
  });
  describe('flipTile()', () => {
    let action: FlipTile;
    beforeEach(() => {
      action = flipTile(0, {
        tileKey: 1,
        image: '',
        flipped: false,
        matched: false,
      });
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(FLIP_TILE);
    });

    it('has the correct payload', () => {
      expect(action.index).to.equal(0);
      expect(action.tile.tileKey).to.equal(1);
    });
  });

  describe('toggleIsWaiting()', () => {
    let action: ToggleIsWaiting;
    beforeEach(() => {
      action = toggleIsWaiting(true);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(TOGGLE_IS_WAITING);
    });

    it('has the correct payload', () => {
      expect(action.isWaiting).to.equal(true);
    });
  });

  describe('incrementTries()', () => {
    let action: IncrementTries;
    beforeEach(() => {
      action = incrementTries();
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(INCREMENT_TRIES);
    });
  });

  describe('matchCheck()', () => {
    let action: MatchCheck;
    beforeEach(() => {
      let flippedTiles = [
        { tileKey: 1, image: '', flipped: false, matched: false },
        { tileKey: 2, image: '', flipped: false, matched: false },
      ];
      action = matchCheck(flippedTiles);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(MATCH_CHECK);
    });

    it('has the correct payload', () => {
      expect(action.flippedTiles).to.be.instanceof(Array);
      expect(action.flippedTiles).to.have.lengthOf(2);
    });
  });
});
