const router = require('express').Router()
module.exports = router

router.use('/books', require('./books'))
router.use('/users', require('./users'))
router.use('/admin', require('./admin'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
