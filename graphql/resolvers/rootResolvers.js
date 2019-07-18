const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const {
  createUserAccount,
  usersList,
  marjanoveUmri,
  findUser,
  login,
  validateFormCredentials
} = require("./user");
const { initLobby, lobbiesList } = require("./lobby");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList,
    marjanoveUmri,
    findUser,
    login,
    lobbiesList
  },

  Mutation: {
    validateFormCredentials,
    createUserAccount,
    initLobby
  }
};
