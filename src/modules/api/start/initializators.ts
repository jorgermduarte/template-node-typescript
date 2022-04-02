import {routersInitializator} from './routers.initializator';
import {startMainMiddlewares} from './main-middlewares.initializator';

const initializators = {
  startMainMiddlewares: startMainMiddlewares,
  startRouters: routersInitializator,
};

export {
  initializators,
};
