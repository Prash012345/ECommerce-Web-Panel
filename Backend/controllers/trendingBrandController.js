const TrendingBrand = require('../models/TrendingBrands');
const multer = require('multer');
const path = require('path');

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/trendings/'); // Directory to save uploaded images
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate unique filename
  }
});

exports.upload = multer({ storage: storage }).single('image');


// Create a new trending brand
exports.createTrendingBrand = async (req, res) => {
  // const { name, logoUrl } = req.body;
  const { name } = req.body;
  const imageUrl = req.file ? req.file.filename : ''; // Get the image filename if uploaded

  try {
    // const brand = new TrendingBrand({ name, logoUrl });
    const brand = new TrendingBrand({ name, logoUrl : imageUrl });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: 'Error creating trending brand', error });
  }
};

// Delete a trending brand by ID
exports.deleteTrendingBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await TrendingBrand.findById(id);
    if (!brand) {
      return res.status(404).json({ message: 'Trending brand not found' });
    }

    await TrendingBrand.deleteOne({ _id: id });
    res.status(200).json({ message: 'Trending brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting trending brand', error });
  }
};

// Get all trending brands
exports.getTrendingBrands = async (req, res) => {
  try {
    const brands = await TrendingBrand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending brands', error });
  }
};
