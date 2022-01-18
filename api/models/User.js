const mongoose = require("mongoose");
const { nanoid } = require('nanoid')

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(12)
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    publicKey: {type: String, required: true},
    isAdmin: { type: Boolean, default: false },
    profilePicture: { type: String, default: "" },
    friends: { type: Array, default: [] },
    directMessages: { type: Array, default: [] },
    rooms: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
