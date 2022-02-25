// import user model
const { Post, User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getSinglePost({ user = null, params }, res) {
    const foundPost = await Post.findOne({
      $or: [{ _id: post ? post._id : params.id }, { username: params.username }],
    });

    if (!foundPost) {
      return res.status(400).json({ message: 'Cannot find a post with this id!' });
    }

    res.json(foundPost);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createPost({ body }, res) {
    const post = await Post.create(body);

    if (!post) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    res.json({ post });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveBook({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteBook({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },
};
