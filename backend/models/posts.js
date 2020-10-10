const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;


const PostsSchema = new Schema({
    userId: String,
    title: String,
    body : String,
})

module.exports = mongoose.model('posts', PostsSchema)
