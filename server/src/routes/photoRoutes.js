const express = require('express');
const router = express.Router();
const { getPhotos, uploadPhoto } = require('../controllers/photoController.js');
const auth = require('../middleware/authMiddleware.js');
const { uploadFile } = require('../services/uploadMulter.js');

// Get photos
router.get('/', auth, getPhotos);

// Upload photo
router.post('/upload', auth, uploadFile, uploadPhoto);

module.exports = router;
