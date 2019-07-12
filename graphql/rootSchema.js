const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Date
  scalar DateTime

  type UserInterests {
    music: [String!]
    games: [String!]
  }

  type User {
    email: String!
    username: String!
    age: Int!
    interests: UserInterests
    balance: Float
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    gameSearching: Int
  }

  type Query {
    usersList: [User!]!

    marjanoveUmri: [User!]!
  }

  type Mutation {
    createUserAccount(
      email: String
      username: String
      age: Int
      password: String
    ): User
  }
`;
