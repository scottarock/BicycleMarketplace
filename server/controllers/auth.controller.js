const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {

  login(request, response) {
    const { email, password } = request.body;
    User.findOne({ email })
      .then( user => {
        try {
          return user.validatePassword(password, user.password)
            .then(valid => {
              if (!valid) throw new Error();
              completeLogin(request, response, user);
            })
        } catch(e) {
          throw new Error();
        }
      })
      .catch( error => {
        response
          .status(Http.Unauthorized)
          .json({ message: 'invalid email/password combination' });
      });
  },

  register(request, response) {
    User.create(request.body)
      .then( user => {
        completeLogin(request, response, user);
      })
      .catch( error => {
        response
          .status(Http.UnprocessableEntity)
          .json(Object.keys(error.errors).map(key => error.errors[key].message));
      });
  },

  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userId');
    response.clearCookie('expiration');
    response.json(true);
  },

}

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userId', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}
