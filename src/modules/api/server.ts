import express = require('express');
import {initializators} from './start/initializators';

const server = express();
const port = 8080; // default port to listen

initializators.startMainMiddlewares(server);
initializators.startRouters(server);

// start the Express server
server.listen( port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

export {
  server,
};
