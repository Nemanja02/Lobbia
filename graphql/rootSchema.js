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
    fullName: String!
    profilePictureUri: String
    banned: Boolean
    verified: Boolean
    id: ID!
    lobbyHistory: [ID!]
    balance: Float
    interests: UserInterests
    dateOfBirth: Date
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Message {
    sender: User
    content: String
  }

  type Lobby {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    expiredAt: DateTime!
    type: Int!
    participants: [User!]
    status: Int!
    messages: [Message!]
  }

  # QUERIES
  type Query {
    usersList: [User!]!

    lobbiesList: [Lobby!]!

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
      fullName: String
      musicInterests: [Int]
      gamesInterests: [Int]
    ): Auth

    initLobby(participants: [String], type: Int, status: Int): Lobby
  }
`;
