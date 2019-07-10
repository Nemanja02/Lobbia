const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const { ObjectId } = Schema.Types;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    interests: {
      music: [String],
      games: [String]
    },

    balance: {
      type: Number,
      default: 0
    },

    connections: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],

    lobbiesHistory: [
      {
        type: ObjectId,
        ref: "Lobby"
      }
    ]
  },
  { timestamps: true }
);

UserSchema.pre("save", async function(next) {
  const user = this;

  const hashedPassword = await bcrypt.hash(user.password, 12);

  user.password = hashedPassword;

  next();
});

UserSchema.methods.comparePasswords = async function(candidate) {
  try {
    const match = await bcrypt.compare(candidate, this.password);
    return match;
  } catch (e) {
    if (e) {
      console.log(e);
    }
  }
};

module.exports = mongoose.model("User", UserSchema, "users");
