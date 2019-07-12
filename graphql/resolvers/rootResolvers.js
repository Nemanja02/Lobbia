const { GraphQLDate, GraphQLDateTime } = require("graphql-iso-date");
const { createUserAccount, usersList, marjanoveUmri } = require("./user");

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,

  Query: {
    usersList,
    marjanoveUmri
  },

  Mutation: {
    createUserAccount
  }
};
