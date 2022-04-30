const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    date_created: Date,
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request',
    },
    message: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
    },
    description: {
        type: String,
        required: true,
    },
}, { collection: 'Notification' });

module.exports = mongoose.model('Notification', notificationSchema)