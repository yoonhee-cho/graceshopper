/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const Order = db.model('order')
const BookInOrder = db.model('book_in_order')
const Book = db.model('book')

describe('User routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
    const user = await User.create({
      id: 1,
      email: 'cody@puppybook.com',
      password: '12345',
      address: 'hello street'
    })

    const order = await Order.create({
      id: 1,
      userId: user.id
    })

    const book = await Book.create({
      id: 3,
      title: 'Hi, From Melody and Hedra',
      price: 3099
    })

    const bookInOrder = await BookInOrder.create({
      id: 2,
      orderId: order.id,
      bookId: book.id
    })

    console.log(user, 'user')
  })

  describe('/api/users/', () => {
    it('GET /api/users/1/cart', async () => {
      const res = await request(app)
        .get('/api/users/1/cart')
        .expect(200)
      expect(res.body).to.be.an('array')
      console.log('res.body', res.body)

      // expect(res.body[0].email).to.be.equal('cody@puppybook.com')
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
