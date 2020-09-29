const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
    isUnique: true,
    allowNull: false
  },
  shortDescription: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  },
  ISBN: {
    type: Sequelize.STRING
  },
  Pages: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://global.oup.com/education/covers/oxed/medium/9780198418054.jpg'
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Book
