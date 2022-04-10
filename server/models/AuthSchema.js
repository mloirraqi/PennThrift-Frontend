const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 25,
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 60,
    },
    email: {
        type: String,
        required: true,
    },
    venmo: {
        type: String,
        minLength: 5,
        maxLength: 16,
    },
    date:{
        type: Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('userTable', User);