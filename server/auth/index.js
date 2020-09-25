const router = require('express').Router()
const User = require('../db/models/user')
const {Order, Book} = require('../db/models')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    // added Order model for this Google user(if user exists in our db)
    console.log('HELLLLO req.body: ', req.body)

    const user = await User.findOne({
      where: {email: req.body.email},
      include: [{model: Order}]
    })
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    let user = await User.create(req.body)
    // create a new user
    const order = await Order.create({
      userId: user.id
    })
    user = await User.findByPk(user.id, {
      include: {
        model: Order
      }
    })
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', async (req, res) => {
  try {
    if (!req.user) {
      res.json(req.user)
    } else {
      const user = await User.findByPk(req.user.id, {
        include: [{model: Order}]
      })
      res.json(user)
    }
  } catch (error) {
    console.error(error)
  }
})

router.use('/google', require('./google'))
