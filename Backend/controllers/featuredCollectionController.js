const FeaturedCollection = require('../models/FeaturedCollections');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/featured/'); // Directory to save uploaded images
  },
  filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate unique filename
  }
});

// Set up multer middleware for image file upload
exports.upload = multer({ storage: storage }).single('image');

// Create a new featured collection
exports.createFeaturedCollection = async (req, res) => {
  const { name, description } = req.body;
  const imageUrl = req.file ? req.file.filename : ''; // Get the image filename if uploaded

  try {
    const collection = new FeaturedCollection({ name, description, imageUrl });
    await collection.save();
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ message: 'Error creating featured collection', error });
  }
};

// Delete a featured collection by ID
exports.deleteFeaturedCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await FeaturedCollection.findById(id);
    if (!collection) {
      return res.status(404).json({ message: 'Featured collection not found' });
    }

    await FeaturedCollection.deleteOne({ _id: id });
    res.status(200).json({ message: 'Featured collection deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting featured collection', error });
  }
};

// Get all featured collections
exports.getFeaturedCollections = async (req, res) => {
  try {
    const collections = await FeaturedCollection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured collections', error });
  }
};
