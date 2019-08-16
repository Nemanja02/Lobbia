const { gql } = require("apollo-server-express");

module.exports = gql`
  # CUSTOM SCALARS
  scalar Date
  scalar DateTime

  type Auth {
    id: ID
  }

  type UserInterests {
    music: [Int!]
    games: [Int!]
  }

  type Connections {
    pending: [User!]
    accepted: [User!]
  }

  type User {
    email: String!
    username: String!
    fullName: String!
    gender: String
    profilePicture: String
    accountDescription: String
    banned: Boolean
    verified: Boolean
    isOnline: Boolean
    id: ID!
    connections: Connections
    lobbyHistory: [ID]
    balance: Float
    interests: UserInterests
    dateOfBirth: Date
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Message {
    sender: User
    content: String
    createdAt: DateTime
    seen: Boolean
  }

  type Response {
    success: Boolean
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

    getProfileData(id: ID): User!
  }

  # MUTATIONS
  type Mutation {
    initLobby(participants: [String], type: Int, status: Int): Lobby

    validateFormCredentials(
      fullName: String
      username: String
      password: String
      email: String
      gender: String
      signature: String
    ): Boolean

    textSearch(query: String length: Int): [User]

    login(signature: String, password: String): Auth

    logout(id: ID!): Response

    sendConnectionRequest(id: ID! connectionId: ID!): Response
    
    cancelConnectionRequest(id: ID! connectionId: ID!): Response
    
    acceptConnectionRequest(id: ID! connectionId: ID!): Response
    
    removeConnection(id: ID! connectionId: ID!): Response

    createUserAccount(
      email: String
      username: String
      dateOfBirth: DateTime
      password: String
      fullName: String
      gender: String
      musicInterests: [Int]
      gamesInterests: [Int]
    ): Auth
  }
`;
