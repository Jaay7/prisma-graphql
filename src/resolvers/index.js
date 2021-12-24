const { prisma } = require("../database.js");
const { Query } = require("./query.js");
const { Mutation } = require("./mutation.js");

const Posts = {
  id: (parent, args, context, info) => parent.id,
  title: (parent, args, context, info) => parent.title,
  body: (parent, args, context, info) => parent.body,
  published: (parent, args, context, info) => parent.published,
}

const resolvers = {
  Posts,
  Query,
  Mutation,
}

module.exports = {
  resolvers,
};