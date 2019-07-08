const { gql } = require("apollo-server-express");

module.exports = gql`
  type Hello {
    greet: String
  }

  type Query {
    hello: Hello
  }
`;
