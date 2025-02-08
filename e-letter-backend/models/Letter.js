const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema({
    senderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        equired: true 
    },

    receiverId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },

    content: { 
        type: String, 
        required: true 
    },

    timestamp: { 
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model('Letter', letterSchema);