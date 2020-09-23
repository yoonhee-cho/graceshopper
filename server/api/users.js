const router = require('express').Router()
const {User, Book, Cart} = require('../db/models')
module.exports = router

//GET api/:userId/cart
router.get('/:userId/cart', async (req, res, next) => {
  const userIdFromLink = req.params.userId
  try {
    const findBooksInCart = await Cart.findAll({
      where: {
        userId: userIdFromLink
      },
      attributes: ['bookId']
    })
    // const bookObj = findBooksInCart.forEach(async (book) => {
    //   const bookId = book.bookId
    //   console.log('bookID: ', bookId)
    //   await Book.findByPk(bookId)
    // })
    const bookObj = await Book.findByPk(
      findBooksInCart.forEach(book => {
        return book.bookId
      })
    )
    // console.log('findBooks: ', findBooksInCart)
    console.log('bookObj: ', bookObj)
    res.json(bookObj)
  } catch (err) {
    next(err)
  }
})
