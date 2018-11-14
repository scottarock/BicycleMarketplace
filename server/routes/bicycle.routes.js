const router = require('express').Router();
const { bicycleController } = require('../controllers');

module.exports = router
  .get('', bicycleController.index)
  .post('', bicycleController.create)
  .get('/:bicycleId', bicycleController.show)
  .put('/:bicycleId', bicycleController.update)
  .delete('/:bicycleId', bicycleController.delete);
