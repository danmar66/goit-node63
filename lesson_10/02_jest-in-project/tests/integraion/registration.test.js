require('dotenv').config()
const testReq = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const User = require('../../models/user')

const { DB_HOST_TEST, PORT } = process.env

describe('registration', () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST_TEST)
      .then(() => console.log('DB connected'))
      .catch((err) => {
        console.log(err)
      })

    await User.deleteMany()
  })

  it('should registration new user', async () => {
    const response = await testReq(app).post('/api/auth/registration').send({
      email: 'user3@gmail.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body.email).toBe('user3@gmail.com')
  })

  it('should not registration the same user 2 times', async () => {
    await testReq(app).post('/api/auth/registration').send({
      email: 'testUser@gmail.com',
      password: '123456',
    })

    const response = await testReq(app).post('/api/auth/registration').send({
      email: 'testUser@gmail.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(409)
    expect(response.body.message).toBe('User with this email already exist')
  })

  afterAll(async () => {
    await mongoose
      .disconnect(DB_HOST_TEST)
      .then(() => console.log('DB disconnected'))
  })
})
