// controllers/contactController.js
const Contact = require('../models/Contact');

// Save a new contact submission
exports.createContact = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save contact details." });
    }
};

// Retrieve all contact submissions
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve contacts." });
    }
};


exports.deleteContact = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the contact by ID and delete it
      const deletedContact = await Contact.findByIdAndDelete(id);
  
      // If the contact was not found, send a 404 response
      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      // Send a success response if deletion was successful
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      // Handle any server errors
      res.status(500).json({ message: 'Server error, unable to delete contact' });
    }
  };

  // Mark contact as resolved
exports.resolveContact = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      contact.status = 'Resolved';
      await contact.save();
      res.json({ message: 'Contact marked as resolved', contact });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  