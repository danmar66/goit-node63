const base64 = require('base-64')
const md5 = require('md5')

async function main() {
  const password = 'very strong password'

  // encoding
  const encoded = base64.encode(password)
  console.log('encoded = ', encoded)

  const decoded = base64.decode(encoded)
  console.log('decoded = ', decoded)

  // hashing
  const hash = md5(password)
  console.log('hashed = ', hash)

  const password2 =
    'very strong password very strong password very strong password very strong password very strong password'
  const hash2 = md5(password2)
  console.log('hashed = ', hash2) // same length

  const hash3 = md5(password2)
  const hash4 = md5(password2)
  console.log('hashed = ', hash3)
  console.log('hashed = ', hash4)
}

main()
