import * as fs from 'fs';
import * as path from 'path';
import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../App';
import configureStore from './../configureStore';

export interface RouterContext {
  url: String;
}

export default function universalLoader(req: any, res: any) {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err: Error, htmlData: String) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }

    const store = configureStore();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const RenderedApp = htmlData.replace('{{SSR}}', markup);
    res.send(RenderedApp);
  });
}
