import * as React from 'react';
import * as actions from '../actions';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState, Tile as TileType, GameStatus } from '../types/index';

interface NavProps {
  startGame: () => void;
  numberOfTries: number;
  status: GameStatus;
}

class Nav extends React.Component<NavProps, {}> {
  componentDidMount() {
    const { startGame } = this.props;

    startGame();
  }

  handleClickResetButton() {
    const { startGame } = this.props;

    setTimeout(() => {
      startGame();
    }, 1000);
  }

  renderGameStatus() {
    const { status } = this.props;

    return (
      <p className="navbar-brand">
        {status === GameStatus.Ongoing && <p>Game is ongoing</p>}
        {status === GameStatus.Ended && <p>Game has ended</p>}
      </p>
    );
  }

  render() {
    const { numberOfTries } = this.props;

    return (
      <nav className="navbar navbar-default navbar-top">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">
              Number of tries:{' '}
              <span className="label label-success">{numberOfTries}</span>
            </p>
            {this.renderGameStatus()}
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <button onClick={() => this.handleClickResetButton()}>
                  Restart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ numberOfTries, status }: StoreState) {
  return {
    numberOfTries,
    status,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.MemoryAction>) {
  return bindActionCreators(
    {
      startGame: actions.startGame,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav as any);
