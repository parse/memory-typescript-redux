import * as _ from 'lodash';
import { Tile } from '../types/index';

function generateTiles(): Array<Tile> {
  let tiles = [];
  let images = [];

  for (let i = 1; i < 9; i++) {
    images.push({
      image: `assets/img/${i}.jpg`,
      flipped: false,
      matched: false,
    });
  }

  tiles = _.shuffle(_.concat(images, images));

  return tiles;
}

export function getTiles(): Array<Tile> {
  return generateTiles();
}
