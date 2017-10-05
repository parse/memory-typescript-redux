import * as React from 'react';
import * as actions from '../actions/memory';

import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

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
        {status === GameStatus.Ongoing && (
          <span className="label label-info">Game is ongoing</span>
        )}
        {status === GameStatus.Ended && (
          <span className="label label-danger">Game has ended</span>
        )}
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
                <NavLink to={'/'}>Game</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <p className="navbar-btn">
                  <a
                    onClick={() => this.handleClickResetButton()}
                    className="btn btn-primary"
                  >
                    Restart
                  </a>
                </p>
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
