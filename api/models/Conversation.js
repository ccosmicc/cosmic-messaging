const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const ConversationSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(12),
    },
    //it contains the sender and receiver information.
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
