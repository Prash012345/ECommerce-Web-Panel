const mongoose = require('mongoose');

const TrendingBrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },  // To store the brand logo image URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TrendingBrand', TrendingBrandSchema);
