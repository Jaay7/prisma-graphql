const { prisma } = require('../database.js');

const Mutation = {
  createPost: (parent, args) => {
    return prisma.posts.create({
      data: {
        title: args.title,
        body: args.body,
        published: args.published,
      },
    });
  }
}

module.exports = {
  Mutation,
};