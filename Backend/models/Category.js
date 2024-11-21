const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String, required: true, unique: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null
  },
  imageUrl: {
    type: String, // To store the filename of the uploaded image
    required: false
  }
});

module.exports = mongoose.model('Category', CategorySchema);
