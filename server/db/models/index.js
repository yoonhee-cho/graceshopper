const User = require('../models/user')
const Book = require('../models/book')
const Author = require('../models/author')
// const Review = require('../models/review')

// book table
// Book.hasMany(Review)
// Review.belongsTo(Book, {as: 'bookId'})

Author.belongsToMany(Book, {through: 'Book_Author'})
Book.belongsToMany(Author, {through: 'Book_Author'})

//  review table
// User.hasMany(Review)
// Review.hasOne(User)
// Review.belongsTo(Book)

// Review.belongsTo(User, {as: 'userId'})

module.exports = {
  User,
  Book,
  Author
}
