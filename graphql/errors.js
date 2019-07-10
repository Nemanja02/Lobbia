const { createError } = require("apollo-errors");

exports.ValidationError = createError("Validation error", {
  message: "A validation error has occurred."
});

exports.AuthenticationError = createError("Authentication error", {
  message: "An authentication error has occured."
});

exports.SessionExpired = createError("Session has expired.", {
  message: "Your session has been expired."
});

exports.InternalServerError = createError("Internal server error", {
  message: "Internal server error, please try again later."
});
