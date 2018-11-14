const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {

  index(request, response){
    // get all users - administrative type usage
    User.find({})
      .then( users => response.json(users) )
      .catch( console.log );
  },

  create(request, response){
    // create a new user - administrative type usage
    User.create(request.body)
      .then( user => response.json(user) )
      .catch( error => {
        // assumes validation errors
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  show(request, response){
    // get specified user
    User.findById(request.params.userId)
      .then( user => response.json(user) )
      .catch( console.log );
  },

  update(request, response){
    // update specified user
    User.findByIdAndUpdate(
      request.params.userId,
      { $set: request.body },
      { new: true }
    )
      .then( user => response.json(user) )
      .catch( error => {
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  delete(request, response){
    // delete specified user
    User.findByIdAndRemove(request.params.userId)
      .then( user => response.json(user) )
      .catch( console.log );
  },

}
