import express = require('express');
import {requestLogger} from '../middleware/main/logger.middleware';

const startMainMiddlewares = (server: express.Express) => {
  server.get('*', requestLogger);
};

export {
  startMainMiddlewares,
};
