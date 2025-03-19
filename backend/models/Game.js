const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    releaseDate: Date
});

module.exports = mongoose.model('Game', gameSchema);
