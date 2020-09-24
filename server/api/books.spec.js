/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Book = db.model('book')

describe('Book routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
    const books = await Promise.all([
      Book.create({id: 1, title: 'book1', price: 20}),
      Book.create({id: 2, title: 'book2', price: 12})
    ])
    const [book1, book2] = books
  })
  //what do we want to test?
  //
  describe('GET /api/books/', async () => {
    const res = await request(app)
      .get('/api/books')
      .expect(200)
    // it('respons with all books', async () => {
    //     const response = await app.get('/api/books/')
    //     console.log('response', response.body)
    //     // expect(response.status).to.equal(200)
    //     expect(response).to.be.an('array')
    //     expect(response.body.length).to.equal(2)
    //     const titles = response.body.map((book) => book.title)
    //     expect(titles).to.include('book1')
    //     expect(titles).to.include('book2')
    // })
  })

  // it('GET /api/users', async () => {
  //   const res = await request(app)
  //     .get('/api/users')
  //     .expect(200)

  //   expect(res.body).to.be.an('array')
  //   expect(res.body[0].email).to.be.equal(codysEmail)
  // })
})
// end describe('/api/users')
// end describe('User routes')
