const mongoose = require("mongoose");

const CreatingSchema =  new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const RegisterSecure = mongoose.model("register",CreatingSchema);

module.exports = RegisterSecure