const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    liked: {
        type: Boolean,
        required: true
    },
    responseTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Response', ResponseSchema);
