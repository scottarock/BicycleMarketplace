const mongoose = require('mongoose');
const { Schema } = mongoose;

const bicycleSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [200, 'Description should be less than 200 characters'],
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    min: [1, 'Price has to be at least $1'],
    required: [true, 'Price is required'],
  },
  location: {
    type: String,
    trim: true,
    required: [true, 'Location is required'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  // TODO: image for the bicycle

})

module.exports = mongoose.model('Bicycle', bicycleSchema);
