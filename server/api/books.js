const router = require('express').Router()
const {Book, Author} = require('../db/models')
module.exports = router

//GET api/books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: Author
        }
      ]
    })
    res.json(books)
  } catch (err) {
    next(err)
  }
})

//GET api/books/:bookId
router.get('/:bookId', async (req, res, next) => {
  try {
    const singleBook = await Book.findByPk(req.params.bookId)
    res.send(singleBook)
  } catch (err) {
    next(err)
  }
})
