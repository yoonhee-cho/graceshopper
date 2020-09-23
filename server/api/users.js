const router = require('express').Router()
const {User, Book, Cart} = require('../db/models')
module.exports = router

//GET api/:userId/cart
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userIdFromLink = req.params.userId

    const findBooksInCart = await Cart.findAll({
      where: {
        userId: userIdFromLink
      },
      attributes: ['bookId']
    })

    const getBooks = async () => {
      return Promise.all(
        findBooksInCart.map(async book => {
          const bookId = book.bookId
          const bookGetter = await Book.findByPk(bookId)
          return bookGetter
        })
      )
    }

    getBooks().then(data => {
      res.json(data)
    })
  } catch (err) {
    next(err)
  }
})
