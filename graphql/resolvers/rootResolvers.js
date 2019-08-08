const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const {
  createUserAccount,
  usersList,
  marjanoveUmri,
  findUser,
  login,
  validateFormCredentials,
  getInitialProfileInfo,
  logout,
  addConnection
} = require("./user");
const { textSearch } = require("./search");
const { initLobby, lobbiesList } = require("./lobby");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList,
    marjanoveUmri,
    findUser,
    lobbiesList,
    getInitialProfileInfo,
  },

  Mutation: {
    validateFormCredentials,
    createUserAccount,
    login,
    logout,
    initLobby,
    addConnection,
    textSearch
  }
};
