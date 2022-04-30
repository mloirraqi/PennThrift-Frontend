const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
    requestee: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    requester: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    answered: Boolean,
}, { collection: 'Request' });

module.exports = mongoose.model('Request', requestSchema)