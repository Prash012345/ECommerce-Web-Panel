const express = require('express');
const router = express.Router();

const { createPromotion, deletePromotion, getPromotions } = require('../controllers/promotionController');

// Promotion routes
router.post('/', createPromotion);
router.delete('/:id', deletePromotion);
router.get('/', getPromotions);

module.exports = router;