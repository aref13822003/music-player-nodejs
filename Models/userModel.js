import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    required: [true, "name is required"],
    type: String,
  },
  userName: {
    required: [true, "username is required"],
    unique: [true, "username already exists"], 
    type: String,
  },
  email: {
    required: [true, "email is required"], 
    unique: [true, "email already exists"], 
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email invalid"],
    type: String,
  },
  password: {
    required: [true, "password is required"], 
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 8 letters, 1 number
      "password must be at least 8 characters and contain numbers and letters", // Fixed typo: "most" to "must"
    ],
    type: String,
  },
  playList: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'PlayList' }
  ],
  recent: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'songs' }
  ],
  favorite: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'songs' }
  ],
  accountType: {
    type: String,
    enum: ['normal', 'premium', 'Singer', 'owners'],
    default: 'normal'
  },
  region: {
    type: String,
  },
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;