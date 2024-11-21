const express = require('express');
const { createItem, getAllItems, updateItem, deleteItem, upload,getItemsByCategory,getItem } = require('../controllers/item');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, upload, createItem); // Use 'upload' middleware for file upload
router.get('/', getAllItems);
router.get('/:id', getItem);
router.get('/categories/:categoryId', getItemsByCategory);
router.put('/:id', protect, upload, updateItem); // Use 'upload' middleware for file upload
router.delete('/:id', protect, deleteItem);

module.exports = router;
