import * as React from 'react';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import TilesBoard from '../../containers/TilesBoard';
import Tile from '../../components/Tile';
import { GameStatus } from '../../types/index';

import configureStore from '../../store/';

const tilesMock = {
  tiles: [
    {
      tileKey: 1,
      flipped: false,
      image: 'assets/img/img2.jpg',
      matched: false,
    },
    {
      tileKey: 1,
      flipped: false,
      image: 'assets/img/img2.jpg',
      matched: false,
    },
    {
      tileKey: 2,
      flipped: false,
      image: 'assets/img/img2.jpg',
      matched: false,
    },
    {
      tileKey: 3,
      flipped: false,
      image: 'assets/img/img3.jpg',
      matched: false,
    },
  ],
  isWaiting: false,
  numberOfTries: 0,
  status: GameStatus.NotStarted,
};

describe('TilesBoard', () => {
  let store;
  let wrapper: any;

  beforeEach(() => {
    const state = {
      memory: { ...tilesMock },
      notification: { notifications: [] },
    };

    store = configureStore(state);
    wrapper = mount(
      <Provider store={store}>
        <TilesBoard />
      </Provider>
    );
  });

  it('should render one Tile for each tile item', () => {
    expect(wrapper.find(Tile).length).to.equal(tilesMock.tiles.length);
  });

  it('should call flipTile action dispatcher when Tile is clicked', () => {
    wrapper
      .find(Tile)
      .first()
      .simulate('click');
    expect(
      wrapper
        .find(Tile)
        .first()
        .props().tile.flipped
    ).to.eq(true);
  });

  it('should not call toggleIsWaiting action dispatcher when Tile is clicked', () => {
    let tile = wrapper.find(Tile).first();
    tile.simulate('click');
    expect(wrapper.props().store.getState().memory.isWaiting).to.eq(false);
  });

  it('should call toggleIsWaiting action dispatcher if two Tiles is clicked', () => {
    wrapper
      .find(Tile)
      .at(0)
      .simulate('click');
    wrapper
      .find(Tile)
      .at(1)
      .simulate('click');
    expect(wrapper.props().store.getState().memory.isWaiting).to.eq(true);
  });

  it('should not call incrementTries action dispatcher when Tile is clicked', () => {
    let numOftries = wrapper.props().store.getState().memory.numberOfTries;
    wrapper
      .find(Tile)
      .at(0)
      .simulate('click');
    expect(wrapper.props().store.getState().memory.numberOfTries).to.be.equal(
      numOftries
    );
  });

  it('should call incrementTries action dispatcher if two Tiles is clicked', () => {
    let numOftries = wrapper.props().store.getState().memory.numberOfTries;
    wrapper
      .find(Tile)
      .at(0)
      .simulate('click');
    wrapper
      .find(Tile)
      .at(1)
      .simulate('click');
    expect(wrapper.props().store.getState().memory.numberOfTries).to.be.equal(
      numOftries + 1
    );
  });
});
