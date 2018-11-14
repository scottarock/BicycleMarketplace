const Bicycle = require('mongoose').model('Bicycle');
const { Http } = require('@status/codes');

module.exports = {

  index(request, response) {
    Bicycle.find({})
      .then( bicycles => response.json(bicycles) )
      .catch( console.log );
  },

  create(request, response) {
    Bicycle.create(request.body)
      .then( bicycle => response.json(bicycle) )
      .catch( error => {
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  show(request, response) {
    Bicycle.findById(request.params.bicycleId)
      .then( bicycle => response.json(bicycle) )
      .catch( console.log );
  },

  update(request, response) {
    Bicycle.findByIdAndUpdate(
      request.params.bicycleId,
      { $set: request.body },
      { new: true }
    )
      .then( bicycle = response.json(bicycle) )
      .catch( error => {
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  delete(request, response) {
    Bicycle.findByIdAndRemove(request.params.bicycleId)
      .then( bicycle => response.json(bicycle) )
      .catch( console.log );
  },

}
