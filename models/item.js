// Import mongoose and alias Schema class
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ItemSchema class by passing in descriptive object literals
const ItemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Load Schema into parsable MongoDb Object using mongoose.model() and allow this file (module) to be accessed by other files by using module.exports.
module.exports = Item = mongoose.model('item', ItemSchema);