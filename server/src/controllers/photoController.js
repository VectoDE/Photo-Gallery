const Photo = require('../models/photoModel.js');
const upload = require('../services/uploadMulter.js');

exports.getPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({ user: req.user.id });
        res.json(photos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.uploadPhoto = async (req, res) => {
    const { title, description } = req.body;
    const { path: url } = req.file;

    try {
        const newPhoto = new Photo({
            title,
            description,
            url,
            user: req.user.id,
        });

        const photo = await newPhoto.save();
        res.json(photo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.uploadFile = async (req, res, next) => {
    try {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                console.error(err);
                return res.status(500).json({ msg: 'Multer error occurred', error: err.message });
            } else if (err) {
                // An unknown error occurred when uploading.
                console.error(err);
                return res.status(500).json({ msg: 'Unknown error occurred', error: err.message });
            }

            // Multer successfully uploaded the file.
            next();
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
