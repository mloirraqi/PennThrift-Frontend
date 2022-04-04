import mongoose from 'mongoose';
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    userName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 25,
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 25,
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
    location: String,
    items: [Item], // update
    reviews_for: [Review],
    reviews_to: [Review],
    requests_for: [Request],
    requests_to: [Request],
    chats: [Chat],
    pending_notifs: [Notification],
});

const Chat = new Schema({
    id: ObjectId,
    user_1: {
        type: User,
        required: true,
    },
    user_2: {
        type: User,
        required: true,
    },
    last_msg_time: Date,
    messages: [],
});

const Message = new Schema({
    id: ObjectId,
    sender: {
        type: User,
        required: true,
    },
    recipient: {
        type: User,
        required: true,
    },
    date_sent: Date,
    text: String,
    attachment: Boolean,
    image: String, // url
    video: String, // url
    delivered: Boolean
});

const Item = new Schema({
    id: ObjectId,
    description: {
        type: String,
        required: true,
        maxLength: 100,
    },
    categories: [String],
    owner: {
        type: User,
        required: true,
    },
    requests_for: [Request],
    to_sell: {
        type: Boolean,
        required: true,
    },
    to_trade: {
        type: Boolean,
        required: true,
    },
    available: Boolean,
});

const Review = new Schema({
    id: ObjectId,
    reviewer: {
        type: User,
        required: true,
    },
    reviewee: {
        type: User,
        required: true,
    },
    item: {
        type: Item,
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
});

const Request = new Schema({
    id: ObjectId,
    requestee: {
        type: User,
        required: true,
    },
    requester: {
        type: User,
        required: true,
    },
    item: {
        type: Item,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    answered: Boolean,
});

const Notification = new Schema({
    id: ObjectId,
    date_created: Date,
    recipient: {
        type: User,
        required: true,
    },
    request: Request,
    message: Message,
    description: {
        type: String,
        required: true,
    },
});

module.exports = {User, Chat, Message, Item, Review, Notification}