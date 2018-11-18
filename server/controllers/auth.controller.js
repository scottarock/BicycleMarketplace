const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {

  login(request, response) {
    const { email, password } = request.body;
    User.findOne({ email: email })
      .then( user => {
        if ( !user ) { throw Error(); }

        // found the user that matches the email, now test password
        return User.validatePassword(password, user.password)
          .then( passwordMatched => {
            if ( !passwordMatched ) { throw Error() }
            // handle log in
            completeLogin(request, response, user);
          });
      })
      .catch( error => {
        response
          .status(Http.Unauthorized)
          .json({ message: 'Invalid Credentials' });
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
