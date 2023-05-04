const User = require('../../models/user')

const getBooks = async (req, res) => {
  const { user } = req
  const { books } = user

  const userMovies = await User.findById(user._id).populate('books')
  console.log(userMovies)
  return res.json({ books })
}

module.exports = getBooks
