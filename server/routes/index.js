const router = require('express').Router();
const authRouter = require('./auth.routes');
const bicycleRouter = require('./bicycle.routes');
const userRouter = require('./user.routes');

module.exports = router
  .use('/auth', authRouter)
  .use('/bicycle', bicycleRouter)
  .use('/user', userRouter);
