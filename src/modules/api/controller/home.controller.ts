import express = require('express');

export default {
  home: (request: express.Request, response: express.Response) => {
    response.send('hello world');
  },
};
