const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const {
  createUserAccount,
  usersList,
  marjanoveUmri,
  findUser,
  login
} = require("./user");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList,
    marjanoveUmri,
    findUser,
    login
  },

  Mutation: {
    createUserAccount
  }
};
