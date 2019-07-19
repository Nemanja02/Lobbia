const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const { ObjectId } = Schema.Types;

const InterestSchema = new Schema({
  id: Number,
  label: String
});

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

    fullName: {
      type: String,
      required: true
    },

    dateOfBirth: {
      type: Date,
      required: true
    },

    interests: {
      music: [InterestSchema],
      games: [InterestSchema]
    },

    balance: {
      type: Number,
      default: 0
    },

    accountDescription: {
      type: String,
      default: ""
    },

    accountType: {
      type: String,
      default: "basic"
    },

    banned: {
      type: Boolean,
      default: false
    },

    profilePicture: {
      type: String
    },

    connections: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],

    verified: {
      type: Boolean,
      default: false
    },

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
