const router = require('express').Router()
const {User, Book, BookInOrder, Order} = require('../db/models')
module.exports = router

//GET api/:userId/cart
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userIdFromLink = req.params.userId

    const orderIdFromOrders = await Order.findAll({
      where: {
        userId: userIdFromLink,
        status: 'in progress'
      },

      attributes: ['id']
    })

    const findBooksIdInCart = await BookInOrder.findAll({
      where: {
        orderId: orderIdFromOrders[0].id
      },

      attributes: ['bookId']
    })

    const getBooks = async () => {
      return Promise.all(
        findBooksIdInCart.map(async book => {
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
