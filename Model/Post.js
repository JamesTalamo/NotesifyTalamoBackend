const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commenter: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: 'String',
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);
