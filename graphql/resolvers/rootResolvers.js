const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const {
  createUserAccount,
  usersList,
  marjanoveUmri,
  findUser,
  login,
  validateFormCredentials,
  getProfileData,
  logout,
  acceptConnectionRequest,
  cancelConnectionRequest,
  removeConnection,
  sendConnectionRequest
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
    getProfileData,
  },

  Mutation: {
    validateFormCredentials,
    createUserAccount,
    login,
    logout,
    initLobby,
    acceptConnectionRequest,
    removeConnection,
    cancelConnectionRequest,
    sendConnectionRequest,
    textSearch
  }
};
