const express = require('express');
const { register, login, adminList, validate } = require('../controllers/auth');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', protect, register);
router.get('/adminList', protect, adminList);
router.get('/validate', protect, validate);
router.post('/login', login);

module.exports = router;
