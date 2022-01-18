const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const MessageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(12),
    },
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
