const router = require('express').Router()
const {Book, Author} = require('../db/models')
module.exports = router

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
