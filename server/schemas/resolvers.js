const User = require("../models/User");
const Post = require("../models/Post");

const resolvers = {
  Query: {
    getUsers: async () => {
      console.log("hitting this");
      return User.find();
    },
    getPosts: async () => {
      console.log("get post");
      return Post.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create({
        username: args.username,
        password: args.password,
        email: args.email,
      });
      return user;
    },
    addPost: async(parent, {title, desc, photo, categories }) => {
        console.log(categories);
        let catArr = [] 
        for (const category of categories) {
            catArr.push(category)
        }
        const post = await Post.create({
            title,
            desc,
            photo,
            $push:{categories: catArr}
            //upsert is used with findOneAndUpdate
        })
        return post;
    }
  },
};

module.exports = resolvers;
