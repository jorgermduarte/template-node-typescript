import express = require('express');
import homeRouter from '../route/home.router';

const routersInitializator = (server: express.Express) => {
  homeRouter(server);
};

export {
  routersInitializator,
};
