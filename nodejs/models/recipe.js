const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema)