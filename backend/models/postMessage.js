const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
        },
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('postSchema', postSchema);