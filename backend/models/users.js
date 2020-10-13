const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    
    _id: Schema.Types.ObjectId,
    name : String,
    email : String,
    password : String,

})

module.exports = mongoose.model('users', UserSchema)
