import * as React from 'react';

import Nav from './containers/Nav';
import TilesBoard from './containers/TilesBoard';
import About from './containers/About';
import NotificationCentre from './containers/NotificationCentre';
import NoMatch from './components/NoMatch';

import { Switch, Route } from 'react-router-dom';

const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <section>
        <Nav />
        <NotificationCentre />
        <Switch>
          <Route exact={true} path="/" component={TilesBoard} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
