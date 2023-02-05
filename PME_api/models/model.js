const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    stack: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String
    }
});



module.exports = mongoose.model('Data', memberSchema)