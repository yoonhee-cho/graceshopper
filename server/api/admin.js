const router = require('express').Router()
const {User, Book, Author} = require('../db/models')
module.exports = router
const isAdminMiddleware = require('../app/adminPrivileges')

//GET all users
router.get('/users', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        isAdmin: false
      },
      attributes: ['id', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET books api/admin/books
router.get('/books', isAdminMiddleware, async (req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    next(err)
  }
})

router.post('/books', isAdminMiddleware, async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body)
    const author = await Author.findOrCreate({
      where: {
        firstName: req.body.authors[0]
      }
    })

    await newBook.addAuthors(author.id)

    res.status(201).end()
  } catch (err) {
    next(err)
  }
})

router.put('/books/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const id = +req.params.id
    const findBook = await Book.findByPk(id)
    const updatedBook = await findBook.update(req.body)
    res.json(updatedBook)
  } catch (error) {
    console.log(error)
  }
})

//DELETE a book
router.delete('/books/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const id = +req.params.id
    const bookToBeDeleted = await Book.findByPk(id)
    await bookToBeDeleted.destroy()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})
