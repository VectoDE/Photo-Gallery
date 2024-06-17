const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController.js');
const auth = require('../middleware/authMiddleware.js');

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Logout
router.get('/logout', auth, logout);

module.exports = router;
