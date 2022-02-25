const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema(
    {
     name: {
         type: String,
         required: true
     }
    },
  );

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: [categorySchema]
  },
);


const Post = mongoose.model('Post', postSchema);
module.exports = Post;

