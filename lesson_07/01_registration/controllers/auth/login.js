const User = require('../../models/user')
const { RequestError } = require('../../helpers')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    throw RequestError(401, 'Email is not valid')
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    throw RequestError(401, 'Password is not valid')
  }

  res.json({ token: '<TOKEN>' })
}

module.exports = login
