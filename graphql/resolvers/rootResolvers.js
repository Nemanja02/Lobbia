const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const {
  createUserAccount,
  usersList,
  marjanoveUmri,
  findUser,
  login,
  validateFormCredentials,
  getInitialProfileInfo
} = require("./user");
const { initLobby, lobbiesList } = require("./lobby");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList,
    marjanoveUmri,
    findUser,
    lobbiesList,
    getInitialProfileInfo
  },

  Mutation: {
    validateFormCredentials,
    createUserAccount,
    login,
    initLobby
  }
};
