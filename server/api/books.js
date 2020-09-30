const router = require('express').Router()
const {Book, Author} = require('../db/models')
const isAdminMiddleware = require('../app/adminPrivileges')

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
    const bookId = req.params.bookId
    const singleBook = await Book.findByPk(bookId, {
      include: [
        {
          model: Author
        }
      ]
    })
    res.send(singleBook)
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newBook = await Book.findOrCreate(req.body)
    res.json(newBook)
  } catch (err) {
    next(err)
  }
})
