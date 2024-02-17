const express = require("express");
const app = express()
const mongoose = require("mongoose");
const BlogPostModel = require("./models/posts")
mongoose.connect("DATABASENAMEPLACEHOLDER");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/getPosts", async(req: any, res: any) => {
    const findPost = await BlogPostModel.find({});
    res.json(findPost);
    //res.status(200)
    //res = BlogPostModel.find({});
    //return res;
})

app.post("/createPost", async (req: any, res: any) => {
    const post = req.body;
    const newPost = new BlogPostModel(post);
    await newPost.save();
    res.json(post)
})

app.listen(3001, () => {
    //console.log("hello world");
})
