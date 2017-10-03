require('ignore-styles');

import * as path from 'path';
import * as morgan from 'morgan';
import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';

import router from './routes/index';
import universalLoader from './universal';

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app'],
});

const _app = express();

// Support Gzip
_app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
_app.use(bodyParser.json());
_app.use(bodyParser.urlencoded({ extended: false }));

// Setup logger
_app.use(morgan('combined'));

_app.use('/', router);

// Serve static assets
_app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

// Always return the main index.html, so we render the route in the client
_app.use('/', universalLoader);

module.exports = _app;
