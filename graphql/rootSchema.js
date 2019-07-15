const { gql } = require("apollo-server-express");

module.exports = gql`
  # CUSTOM SCALARS
  scalar Date
  scalar DateTime

  type Auth {
    token: String!
    id: ID
  }

  type UserInterests {
    music: [Int!]
    games: [Int!]
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

  # QUERIES
  type Query {
    usersList: [User!]!

    findUser(id: ID): User!

    login(signature: String, password: String): Auth

    marjanoveUmri: [User!]!
  }

  # MUTATIONS
  type Mutation {
    createUserAccount(
      email: String
      username: String
      dateOfBirth: Date
      password: String
    ): Auth

    # initializeLobby(participants: [String] ):
  }
`;
