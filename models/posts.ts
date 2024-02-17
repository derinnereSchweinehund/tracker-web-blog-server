const mongoose = require("mongoose");
export interface IPost {
    title: string,
    date: string,
    author: string,
    content: string,
}

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const BlogPostModel = mongoose.model("posts", PostSchema);
module.exports = BlogPostModel;
