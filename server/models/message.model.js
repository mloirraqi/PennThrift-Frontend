const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date_sent: Date,
    text: String,
    attachment: Boolean,
    image: String, // url
    video: String, // url
    delivered: Boolean
}, { collection: 'Message' });

module.exports = mongoose.model('Message', messageSchema)