const Bicycle = require('mongoose').model('Bicycle');
const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {

  index(request, response) {
    Bicycle.find({})
      .populate('user')
      .then( bicycles => response.json(bicycles) )
      .catch( console.log );
  },

  create(request, response) {
    Bicycle.create(request.body)
      .then( bicycle => {
        return User.findById(bicycle.user)
          .then( user => {
            user.bicycles.push(bicycle);
            return user.save()
              .then (() => response.json(bicycle))
          })
      })
      .catch( error => {
        // assumes validation errors on bicycle
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
      .then( bicycle => {
        response.json(bicycle)
      })
      .catch( error => {
        // assumes validation errors on bicycle
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  delete(request, response) {
    Bicycle.findByIdAndRemove(request.params.bicycleId)
      .then( bicycle => {
        return User.findById(bicycle.user)
          .populate('bicycles')
          .then ( user => {
            user.bicycles.pull({ _id: bicycle.id });
            return user.save()
              .then( () => response.json(bicycle) );
          })
      })
      .catch( console.log );
  },

}
