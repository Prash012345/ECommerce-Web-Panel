// categoryRoutes.js
const express = require('express');
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  upload
} = require('../controllers/category');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create Category
router.post('/categories', protect, upload, createCategory);

// Get All Categories
router.get('/categories', getCategories);



// Update Category by ID
router.put('/categories/:id', protect, upload, updateCategory);

// Delete Category by ID
router.delete('/categories/:id', protect, deleteCategory);

module.exports = router;
