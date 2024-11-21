const express = require('express');
const router = express.Router();

const { createFeaturedCollection, deleteFeaturedCollection, getFeaturedCollections, upload } = require('../controllers/featuredCollectionController');

// Featured Collection routes
router.post('/featured', upload, createFeaturedCollection);
router.delete('/featured/:id', deleteFeaturedCollection);
router.get('/featured', getFeaturedCollections);

module.exports = router;