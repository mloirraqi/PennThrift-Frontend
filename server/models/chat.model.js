const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    user_1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    user_2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    last_msg_time: Date,
    messages: [],
}, { collection: 'Chat' });

module.exports = mongoose.model('Chat', chatSchema)