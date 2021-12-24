const { gql } = require("apollo-server")

const typeDefs = gql `
  type Posts {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }

  type Query {
    posts: [Posts]
    post(id: ID!): Posts
  }

  type Mutation {
    createPost(title: String!, body: String!, published: Boolean!): Posts
  }
`

module.exports = {
  typeDefs,
}