// import user model
const { Category } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single category by either their id or their username
  async getSingleCat({ category = null, params }, res) {
    const foundCategory = await Category.findOne({
      $or: [{ name: params.name }],
    });

    if (!foundCategory) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }
    res.json(foundCategory);
  },
  
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createCat({ body }, res) {
    const category = await Category.create(body);

    if (!category) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

//   // remove a book from `savedBooks`
//   async deleteBook({ user, params }, res) {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: user._id },
//       { $pull: { savedBooks: { bookId: params.bookId } } },
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: "Couldn't find user with this id!" });
//     }
//     return res.json(updatedUser);
//   },
// };
