const bcrypt = require('bcrypt')

async function main() {
  const password = 'very strong password'

  const salt = await bcrypt.genSalt() // salt => random string
  console.log('salt = ', salt)

  const salt2 = '$2b$10$j6A6uWI5Wmey/oJpNZseKO'

  hashed = await bcrypt.hash(password, salt)
  //   hashed = await bcrypt.hash(password, salt2) // same result every time

  console.log('hashed = ', hashed)

  const isTheSame = await bcrypt.compare('very strong password', hashed)
  console.log('Is the same = ', isTheSame)
}

main()
