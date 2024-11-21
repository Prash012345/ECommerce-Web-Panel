const express = require('express');
const router = express.Router();

const { createTrendingBrand, deleteTrendingBrand, getTrendingBrands, upload } = require('../controllers/trendingBrandController');

// Trending Brand routes
router.post('/trending', upload, createTrendingBrand);
router.delete('/trending/:id', deleteTrendingBrand);
router.get('/trending', getTrendingBrands);

module.exports = router;
