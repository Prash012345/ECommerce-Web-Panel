const Promotion = require('../models/Promotions');

// Create a new promotion
exports.createPromotion = async (req, res) => {
  const { title, details, startDate, endDate } = req.body;
  try {
    const promotion = new Promotion({ title, details, startDate, endDate });
    await promotion.save();
    res.status(201).json(promotion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating promotion', error });
  }
};

// Delete a promotion by ID
exports.deletePromotion = async (req, res) => {
  const { id } = req.params;
  try {
    const promotion = await Promotion.findById(id);
    if (!promotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }

    await Promotion.deleteOne({ _id: id });
    res.status(200).json({ message: 'Promotion deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting promotion', error });
  }
};

// Get all promotions
exports.getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching promotions', error });
  }
};
