const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const { createUserAccount, usersList } = require("./user");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList
  },

  Mutation: {
    createUserAccount
  }
};
