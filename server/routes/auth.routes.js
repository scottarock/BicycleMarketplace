const router = require('express').Router();
const { authController } = require('../controllers');

module.exports = router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .delete('/logout', authController.logout);
