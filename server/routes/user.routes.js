const router = require('express').Router();
const { userController } = require('../controllers');

module.exports = router
  .get('/:userId', userController.show);
