const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {type: String, required: true},
    message: {type: String, required: true},
    commentedAt: {type: Date, default: Date.now}
});

const postSchema = new Schema({
    title: {type: String, required: true, unique: true, minLength: 5},
    content: {type: String, required: true, minLength: 50},
    author: {type: String},
    tags: {type: String},
    category: {type: String, default: "General"},
    likes: {type: Number},
    comments: [commentSchema],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    isDeleted: {type: Boolean, default: false}
})