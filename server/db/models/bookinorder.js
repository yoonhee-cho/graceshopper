const Sequelize = require('sequelize')
const db = require('../db')

const BookInOrder = db.define('book_in_order', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },

  totalPrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = BookInOrder
