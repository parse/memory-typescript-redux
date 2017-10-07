import * as React from 'react';
import { Provider } from 'react-redux';
import { GameStatus } from '../../types/index';

import Nav from '../../containers/Nav';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../../store/';

describe('Nav', () => {
  let store;
  let tree;

  it('renders correctly game status ENDED', () => {
    const state = {
      memory: {
        tiles: [],
        isWaiting: false,
        numberOfTries: 0,
        status: GameStatus.Ended,
      },
      notification: { notifications: [] },
    };

    store = configureStore(state);
    tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly game status ONGOING', () => {
    const state = {
      memory: {
        tiles: [],
        isWaiting: false,
        numberOfTries: 0,
        status: GameStatus.Ongoing,
      },
      notification: { notifications: [] },
    };

    store = configureStore(state);
    tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
