const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({
        _id: context.user._id,
      });

      if (!foundUser) {
        throw new AuthenticationError("You need to be logged in!");
      }

      return foundUser.populate("post");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, { title, desc, photo }) => {
      if (context.user) {
        const post = await Post.create({ title, desc, photo });
        return post;
      }
      throw new AuthenticationError(
        "You need to be logged in to create a post"
      );
    },
  },
};

module.export = resolvers;