import React from 'react'
import {fetchBooks} from '../store/books'
import {connect} from 'react-redux'

import AddToCart from './AddToCart'

import {Link} from 'react-router-dom'

export class AllBooks extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadBooksInReact()
  }

  render() {
    // const books = this.props.books
    const loggedUserId = this.props.loggedUserId

    return (
      <div className="books-list">
        <h3>Books</h3>

        {this.props.booksInReact.books &&
          this.props.booksInReact.books.map(book => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <h4>Book Title : {book.title}</h4>
                <div>
                  by{' '}
                  {book.authors.map(
                    (author, idx) =>
                      idx === book.authors.length - 1
                        ? `${author.firstName} ${author.lastName} `
                        : `${author.firstName} ${author.lastName} , `
                  )}
                </div>
                <div>
                  <i>{book.shortDescription}</i>
                </div>
                <div>Genre:{book.category}</div>

                <div>Price: {book.price / 100}</div>
                <AddToCart book={book} loggedUserId={loggedUserId} />

                <img src={book.imageUrl} />
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    booksInReact: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {loadBooksInReact: () => dispatch(fetchBooks())}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
