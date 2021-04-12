const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required:true,
    
  },
  email:{
      type: String,
      required: true,
  }
},{timestamps: true});

const UserModel = mongoose.model("user", userSchema)
module.exports= UserModel;

