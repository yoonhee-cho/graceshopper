const router = require('express').Router()
const {User, Book, BookInOrder, Order} = require('../db/models')
module.exports = router

//GET api/users/:userId/cart
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
          const bookGetter = await Book.findOne({
            where: {
              id: bookId
            },

            include: [
              {
                model: BookInOrder,
                where: {
                  orderId: orderIdFromOrders[0].id
                },

                attributes: ['bookId', 'quantity', 'totalPrice']
              }
            ]
          })
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

//Post Route /api/users/:userId/cart

router.post('/:userId/cart', async (req, res, next) => {
  try {
    const bookId = req.body.id
    const userId = req.params.userId

    const orderId = await Order.findOrCreate({
      where: {
        userId: userId,
        status: 'in progress'
      },
      attributes: ['id']
    })
    // console.log('LOOK HERE: ', orderId[0].id)
    const newBookInCart = await BookInOrder.create({
      bookId: bookId,
      orderId: orderId[0].id
    })

    // newBookInCart.quantity = req.body.qty

    newBookInCart.totalPrice = req.body.price
    await newBookInCart.save()

    // console.log('this is newBookInCart: ', newBookInCart)
    await res.send(newBookInCart)
  } catch (err) {
    next(err)
  }
})

// //put route api/users/:userId/cart

// router.put('/:userId/cart', async (req, res, next) => {
//   try {

//   } catch (error) {
//     console.log(error)
//   }
// })

router.put('/:userId/cart', async (req, res, next) => {
  try {
    const bookId = req.body.id

    const userId = req.params.userId

    const orderId = await Order.findOne({
      where: {
        userId: userId,
        status: 'in progress'
      },
      attributes: ['id']
    })

    const quantityInCart = req.body.book_in_orders[0].quantity
    const bookInOrder = await BookInOrder.findOne({
      where: {
        bookId: bookId,
        orderId: orderId.id
      }
    })

    const subtotal = req.body.price * quantityInCart

    bookInOrder.quantity = quantityInCart
    await bookInOrder.save()
    bookInOrder.totalPrice = subtotal

    await bookInOrder.save()
    return res.status(201).end
  } catch (error) {
    console.log(error)
  }
})
