const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: ['in progress', 'confirmed']
    },
    defaultValue: 'in progress'
  }
})

module.exports = Cart
