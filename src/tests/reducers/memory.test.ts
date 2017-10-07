import { expect } from 'chai';
const df = require('deep-freeze-strict');
import { GameStatus } from '../../types/index';
import * as types from '../../constants/memory';
import memoryReducer from '../../reducers/memory';
import { getTiles } from '../../data/tiles';

describe('Reducers', () => {
  describe('memory reducer', () => {
    it('should initialize game', () => {
      var INITIAL_STATE = {
        tiles: [],
        isWaiting: false,
        numberOfTries: 0,
      };

      var action = {
        type: types.START_GAME,
        tiles: getTiles(),
      };

      var res = memoryReducer(df(INITIAL_STATE), df(action));

      expect(res.tiles.length).to.equal(16);
    });

    it('should update GameStatus when ending the game', () => {
      var INITIAL_STATE = {
        tiles: [],
        isWaiting: false,
        numberOfTries: 0,
        status: GameStatus.Ongoing,
      };

      var action = {
        type: types.END_GAME,
      };

      var res = memoryReducer(df(INITIAL_STATE), df(action));

      expect(res.status).to.eq(GameStatus.Ended);
    });
  });
});
