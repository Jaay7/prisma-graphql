const { prisma } = require('../database.js');

const Query = {
  posts: (parent, args) => {
    return prisma.posts.findMany({});
  },
  post: (parent, args) => {
    return primary.posts.findFirst({
      where: {
        id: Number(args.id)
      }
    });
  }
}

module.exports = {
  Query
};