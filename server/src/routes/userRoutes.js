const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, getUserByUsername, getUserByEmail } = require('../controllers/userController.js');
const auth = require('../middleware/authMiddleware.js');

// Get all users
router.get('/', auth, getAllUsers);

// Get user by ID
router.get('/id/:id', auth, getUserById);

// Get user by username
router.get('/username/:username', auth, getUserByUsername);

// Get user by email
router.get('/email/:email', auth, getUserByEmail);

module.exports = router;
