import * as React from 'react';

import Nav from './containers/Nav';
import TilesBoard from './containers/TilesBoard';

const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <section>
        <Nav />
        <TilesBoard />
      </section>
    </div>
  );
}

export default App;
