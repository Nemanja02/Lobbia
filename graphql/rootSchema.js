const { gql } = require("apollo-server-express");

module.exports = gql`
  # CUSTOM SCALARS
  scalar Date
  scalar DateTime

  type Auth {
    token: String
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
    profilePicture: String
    accountDescription: String
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

    marjanoveUmri: [User!]!

    getInitialProfileInfo(id: ID): User!
  }

  # MUTATIONS
  type Mutation {
    initLobby(participants: [String], type: Int, status: Int): Lobby

    validateFormCredentials(
      fullName: String
      username: String
      password: String
      email: String
      signature: String
    ): Boolean

    login(signature: String, password: String): Auth

    createUserAccount(
      email: String
      username: String
      dateOfBirth: DateTime
      password: String
      fullName: String
      musicInterests: [Int]
      gamesInterests: [Int]
    ): Auth
  }
`;
