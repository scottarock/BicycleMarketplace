const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {

  login(request, response) {
    const { email, password } = request.body;
    console.log(`finding ${email}`);
    User.findOne({ email: email })
      .then( user => {
        console.log(`found ${email}`);
        if ( !user ) { throw Error(); }

        // found the user that matches the email, now test password
        return User.validatePassword(password, user.password)
          .then( passwordMatched => {
            console.log(`authentication matched -> ${passwordMatched}`);
            if ( !passwordMatched ) { throw Error() }
            // handle log in
            completeLogin(request, response, user);
          });
      })
      .catch( error => {
        console.log(`login of ${email} failed`);
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
