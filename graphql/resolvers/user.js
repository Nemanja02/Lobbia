const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { jwt_key } = require("../../config/config.json");

const validator = require("validator");
const passwordValidator = require("password-validator");
const validationSchema = new passwordValidator();

validationSchema
  .is()
  .min(8)
  .is()
  .max(32)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);
const {
  ValidationError,
  AuthenticationError,
  SessionExpired
} = require("../errors");

exports.validateFormCredentials = async (
  parent,
  { fullName, email, username, password }
) => {
  if (!fullName || !email || !username || !password)
    throw new ValidationError({
      data: {
        message: "Please fill out all required fields."
      },
      internalData: {
        status: 403,
        error:
          "User tried to proceed on signup form without providing all required data."
      }
    });

  if (
    !validator.isEmail(email) ||
    !validationSchema.validate(password) ||
    !(fullName.length >= 3) ||
    !(username.length >= 5)
  ) {
    return false;
  } else {
    return true;
  }
};

// xD
exports.marjanoveUmri = async () => {
  const res = await User.find();
  res.map((el, i) => {
    let gameId = 0;
    if (i % 2 === 0) gameId = 1;
    if (i === 4) gameId = 2;
    el.gameSearching = gameId;
  });
  return res;
};

// register new user
exports.createUserAccount = async (
  parent,
  {
    email,
    dateOfBirth,
    username,
    password,
    fullName,
    gamesInterests,
    musicInterests,
    profilePictureUri
  },
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
      min: 8,
      max: 32
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
    dateOfBirth,
    profilePicture
  });

  const user = await newUser.save();

  const token = await jwt.sign(
    {
      id: user_id,
      username: user.username,
      email: user.email
    },
    jwt_key,
    { expiresIn: "24h" }
  );

  return token;
};

exports.login = async (parent, { signature, password }) => {
  if (!signature) {
    throw new ValidationError({
      data: {
        message: "E-Mail/Username field is required."
      },
      internalData: {
        error: "User tried to sign in without entering email/username.",
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

  let signatureType = "";
  // first check
  if (!User.findOne({ username: signature })) {
    // second check
    if (!User.findOne({ email: signature }))
      throw new ValidationError({
        data: {
          message: "Email or username is not valid. Please try again."
        },
        internalData: {
          error: "User tried to sign in with invalid email/username.",
          status: 403
        }
      });
    else {
      signatureType = "email";
    }
  } else {
    signatureType = "username";
  }

  const result = await User.findOne({
    [signatureType]: signature
  });
  if (!result) {
    throw new ValidationError({
      data: {
        message: "Email or username is not valid. Please try again."
      },
      internalData: {
        error: "User tried to sign in with invalid entered email.",
        status: 403
      }
    });
  }

  const isMatch = await result.comparePasswords(password);

  if (!isMatch) {
    throw new ValidationError({
      data: {
        message: "Invalid password, please try again."
      },
      internalData: {
        error: "User tried to sign in with invalid entered password.",
        status: 403
      }
    });
  }

  try {
    const token = await jwt.sign(
      { id: result._id, email: result.email, username: result.username },
      jwt_key,
      {
        expiresIn: "24h"
      }
    );

    return {
      token
    };
  } catch (e) {
    console.log(e);
  }
};

// return all users
exports.usersList = async () => {
  return await User.find();
};

// return specific user
exports.findUser = async (parent, { id }, ctx) => {
  return await User.findOne({ _id: id });
};
