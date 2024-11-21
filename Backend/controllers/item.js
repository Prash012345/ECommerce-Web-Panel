const Item = require('../models/item');
const multer = require('multer');
const path = require('path');

exports.getItemsByCategory = async (req, res) => {
    const { categoryId } = req.params;
  
    try {
      // Fetch items associated with the category
      const items = await Item.find({ category: categoryId }).populate('category', 'name');
      
      // If no items found, return an empty array with a success message
      if (items.length === 0) {
        return res.status(200).json([]);  // Respond with an empty array instead of 404
      }
  
      // If items are found, return them with a 200 status
      res.status(200).json(items);
    } catch (error) {
      // In case of any server error, return 500 status with an error message
      res.status(500).json({ message: 'Error fetching items for the category', error });
    }
  };

// Multer configuration for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/items/'); // Directory to save uploaded images
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Generate unique filename
    }
});

// Set up multer middleware for image file upload
exports.upload = multer({ storage: storage }).single('image');

// Create new item with image upload
exports.createItem = async (req, res) => {
    try {
        const { name, price, category, stock, description } = req.body;
        const imageUrl = req.file ? req.file.filename : ''; // Get the image filename if uploaded

        const newItem = new Item({
            name,
            price,
            category,
            stock,
            description,
            imageUrl // Save image filename in database
        });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category');
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getItem = async (req, res) => {
    const Id = req.params.id;
    try {
        const items = await Item.findOne({
            _id : Id
        }).populate('category');
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an item
exports.updateItem = async (req, res) => {
    try {
        const { name, price, category, stock, description } = req.body;
        const imageUrl = req.file ? req.file.filename : req.body.imageUrl; // Allow image update if a new one is uploaded

        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id, 
            { name, price, category, stock, description, imageUrl }, 
            { new: true }
        );

        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
