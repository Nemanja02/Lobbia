const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = mongoose.SchemaTypes;

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
      type: Number,
      default: 0
    },

    status: {
      type: Number,
      default: 1
    },

    messages: [MessageSchema],

    expiredAt: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lobby", LobbySchema, "lobbies");
