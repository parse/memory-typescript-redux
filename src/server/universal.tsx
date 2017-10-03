import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOMServer from 'react-dom/server';
import App from '../App';

import configureStore from './../configureStore';
import rootSaga from './../sagas/index';
import { memoryReducer } from './../reducers/index';

export default function universalLoader(req: any, res: any) {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err: Error, htmlData: String) => {
    console.log('FIRE!');
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const store = configureStore(memoryReducer, rootSaga);
    const markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // we're good, send the response
    console.log('FIRE!');
    const RenderedApp = htmlData.replace('{{SSR}}', markup);
    res.send(RenderedApp);
  });
}
