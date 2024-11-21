const mongoose = require('mongoose');

const FeaturedCollectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },  // To store the collection image URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FeaturedCollection', FeaturedCollectionSchema);
