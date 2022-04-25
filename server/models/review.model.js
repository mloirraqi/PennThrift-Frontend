const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reviewee: {
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
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
}, { collection: 'Review' });

module.exports = mongoose.model('Review', reviewSchema)