import { expect } from 'chai';

import { getTiles } from '../../data/tiles';
import { Tile } from '../../types';

describe('tiles', () => {
  describe('getTiles()', () => {
    let tiles: Array<Tile>;

    beforeEach(() => {
      tiles = getTiles();
    });

    it('should return array', () => {
      expect(tiles).to.be.instanceof(Array);
    });

    it('should return array of 16 elements', () => {
      expect(tiles.length).to.equal(16);
    });
  });
});
