const mongoose = require("mongoose");
const categorySchema = require("./Category");

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
  { timestamps: true }
);

module.exports = postSchema
