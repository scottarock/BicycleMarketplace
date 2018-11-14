const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email is required'],
    validate: {
      validator: function(email) {
        return validator.isEmail(email);
      },
      message: email => `"${email.value}" is not a valid email`,
    },
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required'],
    minlength: [8, 'password must be at least 8 characters long'],
  },
  // TODO: add bicycles array from bicycle model

});

userSchema.plugin(uniqueValidator, { message: '{PATH} is already in use'});
userSchema.pre('save', function(next) {
  if ( !this.isModified('password') ) {
    return next();
  }
  bcrypt.hash(this.password, 10)
    .then( hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(next);
});
userSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);
