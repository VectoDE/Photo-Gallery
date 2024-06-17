const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Photo', PhotoSchema);
