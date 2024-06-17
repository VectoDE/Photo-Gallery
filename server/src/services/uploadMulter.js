const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter function
const fileFilter = (req, file, cb) => {
    // Accept images, videos and gifs
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/quicktime'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only images (jpeg, png, gif) and videos (mp4, mov) are allowed'), false);
    }
};

// Initialize Multer upload middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload.single('file');
