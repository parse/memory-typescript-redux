import * as React from 'react';
import * as actions from '../actions';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { StoreState, GameStatus } from '../types/index';

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
        {status === GameStatus.Ongoing && <span>Game is ongoing</span>}
        {status === GameStatus.Ended && <span>Game has ended</span>}
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
                <Link to={'/'}>Game</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
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

function mapStateToProps(state: StoreState) {
  const { numberOfTries, status } = state.memory;

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
