/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Book = db.model('book')

describe('Book model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('title and price are not null', () => {
    let book

    beforeEach(async () => {
      book = await Book.create({
        title: 'I am a book!',
        price: 3099
      })
    })

    it('returns true if the the title is not null', () => {
      expect(book.title.length).to.be.greaterThan(0)
    })

    it('returns true if the price is not null', () => {
      expect(book.price).to.be.greaterThan(0)
    })
    // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
