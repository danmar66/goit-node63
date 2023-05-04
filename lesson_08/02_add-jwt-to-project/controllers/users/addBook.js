const User = require('../../models/user')

const addBook = async (req, res) => {
  const { user } = req
  const { id: bookID } = req.body

  user.books.push(bookID)

  console.log('user ', user)
  await User.findByIdAndUpdate(user._id, user)
  return res.json({ books: user.books })
}

module.exports = addBook
