import express = require('express');
import homeController from '../controller/home.controller';

export default (router : express.Express) => {
  router.get('/', homeController.home);
};
