import express = require('express');

const requestLogger = function(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) {
  console.log(
      `[${new Date().toISOString()}][${request.method}]` +
    ` - ${request.url} `,
  );
  next();
};

export {requestLogger};
