const User = require('../models/user')
const Book = require('../models/book')
const Author = require('../models/author')
const Order = require('./order')
const BookInOrder = require('./bookinorder')
// const Review = require('../models/review')

// book table
// Book.hasMany(Review)
// Review.belongsTo(Book, {as: 'bookId'})

Author.belongsToMany(Book, {through: 'Book_Author'})
Book.belongsToMany(Author, {through: 'Book_Author'})

// cart through table

//  review table
// User.hasMany(Review)
// Review.hasOne(User)
// Review.belongsTo(Book)

Order.hasMany(BookInOrder)
BookInOrder.belongsTo(Order)

BookInOrder.belongsTo(Book)
Book.hasMany(BookInOrder)

Order.belongsTo(User)
User.hasMany(Order)
// Review.belongsTo(User, {as: 'userId'})

module.exports = {
  User,
  Book,
  Author,
  Order,
  BookInOrder
}
