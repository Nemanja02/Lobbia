const User = require("../../models/User");
const validator = require("validator");

const {
  ValidationError,
  AuthenticationError,
  SessionExpired
} = require("../errors");

exports.createUserAccount = async (
  parent,
  { email, age, username, password },
  ctx
) => {
  if (!email || !age || !username) {
    throw new ValidationError({
      data: {
        message: "Please fill out all sign up fields."
      },
      internalData: {
        error: "User tried to sign in without filling out all fields.",
        status: 403
      }
    });
  }

  if (!validator.isEmail(email)) {
    throw new ValidationError({
      data: {
        message: "E-Mail must be valid."
      },
      internalData: {
        error: "User tried to sign in with invalid email string type.",
        status: 403
      }
    });
  }

  if (
    !password ||
    !validator.isLength(password, {
      min: 6,
      max: 16
    })
  ) {
    throw new ValidationError({
      data: {
        message:
          "Password field is required and must be betweeen 6 and 16 characters."
      },
      internalData: {
        error: "User tried to sign in with invalid password length.",
        status: 403
      }
    });
  }

  const doesMatch = await User.findOne({ email });

  if (doesMatch) {
    throw new ValidationError({
      data: {
        message: "E-Mail is already in use."
      },
      internalData: {
        error: "User tried to sign up with email that already exists in DB.",
        status: 403
      }
    });
  }

  const newUser = new User({
    username,
    email,
    password,
    age
  });
  const user = await newUser.save();
  return user;
};

exports.usersList = async (parent, args, ctx) => {
  console.log(ctx);
  return await User.find();
};
