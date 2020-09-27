
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

      Book.create({id: 1, title: 'book1', price: 2000}),
      Book.create({id: 2, title: 'book2', price: 1200})
    ])
    const [book1, book2] = books
  })

  describe('GET /api/books/', () => {
    it('response with all books', async () => {
      const res = await request(app)
        .get('/api/books')
        .expect(200)
      expect(res.body).to.be.an('array')
      //expect(res.body[0].title).to.be.equal(bookOneTitle)
      expect(res.body.length).to.equal(2)
      const titles = res.body.map(book => book.title)
      expect(titles).to.include('book1')
      expect(titles).to.include('book2')
    })
  })
})
// end describe('/api/books')

