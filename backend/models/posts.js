const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;


const PostsSchema = new Schema({
    userId: { type: Schema.Types.ObjectI, ref: 'users' },
  //  userId: { type: String, ref: 'users' },

    title:{ type: String},
    body : {type: String},
})

module.exports = mongoose.model('posts', PostsSchema)
