const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const MessageSchema = new Schema(
  {
    sender: {
      type: ObjectId,
      ref: "User"
    },

    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const LobbySchema = new Schema(
  {
    participants: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],

    type: {
      type: String,
      default: "temporary"
    },

    status: {
      type: Number,
      required: true,
      default: 0
    },

    messages: [MessageSchema],

    expiredAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lobby", LobbySchema, "lobbies");
