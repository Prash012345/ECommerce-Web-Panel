// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


// Route to create a new contact submission
router.post('/', contactController.createContact);

// Route to get all contact submissions (for admin panel)
router.get('/', contactController.getAllContacts);

router.delete('/:id', contactController.deleteContact);

router.put('/:id/resolve', contactController.resolveContact); // Mark as resolved

module.exports = router;
