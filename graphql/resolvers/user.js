const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { jwt_key } = require("../../config/config.json");

const genres = require("../../config/music_genres.json");
const games = require("../../config/games.json");

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
  { fullName, email, username, password, signature }
) => {
  if (!signature) {
    if (!(fullName && email && username && password))
      throw new ValidationError({
        data: {
          message: "Please fill out all form fields."
        },
        internalData: {
          status: 403,
          error:
            "User tried to proceed on signup/login form without providing all required data."
        }
      });
  }

  if (signature) {
    if (!(signature && password))
      throw new ValidationError({
        data: {
          message: "Please fill out all form fields."
        },
        internalData: {
          status: 403,
          error:
            "User tried to proceed on signup/login form without providing all required data."
        }
      });
  }

  if (!signature) {
    if (!validator.isEmail(email)) {
      throw new ValidationError({
        data: {
          message: "Email is not valid. Please try again."
        },
        internalData: {
          error: "User tried to sign in with invalid email.",
          status: 403
        }
      });
    }

    const isEmailUnique = await User.findOne({ email });
    if (isEmailUnique) {
      throw new ValidationError({
        data: {
          message: "Email is already in use. Please try again."
        },
        internalData: {
          error: "User tried to sign in with invalid email.",
          status: 403
        }
      });
    }

    if (!validationSchema.validate(password)) {
      throw new ValidationError({
        data: {
          message: "Please make sure password is valid."
        },
        internalData: {
          error: "User tried to sign in with invalid password requirements.",
          status: 403
        }
      });
    }

    if (!(fullName.length >= 3))
      throw new ValidationError({
        data: {
          message: "Your full name should be at least 3 characters long."
        },
        internalData: {
          error: "User tried to sign in with invalid password requirements.",
          status: 403
        }
      });

    if (!(username.length >= 5))
      throw new ValidationError({
        data: {
          message: "Username should be at least 5 characters long."
        },
        internalData: {
          error: "User tried to sign in with invalid password requirements.",
          status: 403
        }
      });

    const isUsernameUnique = await User.findOne({ username });
    if (isUsernameUnique)
      throw new ValidationError({
        data: {
          message: "Username is already in use. Please make sure it is unique."
        },
        internalData: {
          error: "User tried to sign in with invalid email.",
          status: 403
        }
      });

    return true;
  }

  if (signature) {
    let signatureType = "";
    // first check
    const firstCheckResult = await User.findOne({ username: signature });
    if (!firstCheckResult) {
      // second check
      const secondCheckResult = await User.findOne({ email: signature });
      if (!secondCheckResult)
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
    } else {
      const isPasswordValid = await result.comparePasswords(password);
      if (isPasswordValid) return true;
      else
        throw new ValidationError({
          data: {
            message: "Password is invalid. Please try again."
          },
          internalData: {
            error: "User tried to sign in with invalid password.",
            status: 403
          }
        });
    }
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
    musicInterests
  },
  ctx
) => {
  if (!email || !dateOfBirth || !username || !password || !fullName) {
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

  const newGamesInterests = [];

  console.log()

  for (let game in games) {
    for (let field of gamesInterests) {
      console.log(game, field);
      if (game == field) {
        newGamesInterests.push({
          label: games[game].label,
          id: game
        });
      }
    }
  }

  const newGenresInterests = [];

  for (let genre in genres) {
    for (let field of musicInterests) {
      if (genre == field) {
        newGenresInterests.push({
          label: genres[genre].label,
          subgenres: genres[genre].subgenres,
          id: genre
        });
      }
    }
  }

  const newUser = new User({
    username,
    email,
    fullName,
    password,
    dateOfBirth,
    interests: {
      music: newGenresInterests,
      games: newGamesInterests
    }
  });

  const user = await newUser.save();

  const token = await jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email
    },
    jwt_key,
    { expiresIn: "30d" }
  );

  ctx.res.setHeader("Set-Cookie", `token=${token}`);

  return {
    id: user._id
  };
};

exports.getInitialProfileInfo = async (parent, { id }, ctx) => {
  if (!ctx.user.isAuth || !ctx.user)
    throw new AuthenticationError({
      data: {
        message: "Please provide security token."
      },
      internalData: {
        error: "User tried to fetch profile info with no token supplied."
      }
    });
  else {
    if (ctx.user.isAuth) {
      const user = await User.findOne({ _id: id });

      if (!user.profilePicture)
        user.profilePicture = "/assets/default-user-male.png";

      return user;
    }
  }
};

exports.logout = async (parent, { id }) => {
  try {
    const doc = await User.findOneAndUpdate(
      { _id: id },
      {
        isOnline: false
      },
      { new: true }
    );
    if (doc) {
      return {
        succes: true
      };
    }
  } catch (e) {
    console.log(e);
    return {
      success: false
    };
  }
};

exports.login = async (parent, { signature, password }, ctx) => {
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
  const firstCheckResult = await User.findOne({ username: signature });
  if (!firstCheckResult) {
    // second check
    const secondCheckResult = await User.findOne({ email: signature });
    if (!secondCheckResult)
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

    ctx.res.setHeader("Set-Cookie", `token=${token}`);

    await User.findOneAndUpdate(
      { _id: result._id },
      {
        isOnline: true
      }
    );

    return {
      id: result._id
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
