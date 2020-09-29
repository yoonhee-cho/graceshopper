import React from 'react'
import {fetchBooks} from '../store/books'
import {connect} from 'react-redux'

import AddToCart from './AddToCart'

import {Link, Redirect} from 'react-router-dom'

export class AllBooks extends React.Component {
  // eslint-disable-next-line no-useless-constructor
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
        <h3 className="title">
          <i>Books</i>
        </h3>

        {this.props.booksInReact.books &&
          this.props.booksInReact.books.map(book => (
            <div key={book.id} className="individual-book">
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

                <div>Price: ${book.price / 100}</div>

                <img src={book.imageUrl} />
                {loggedUserId ? (
                  <AddToCart book={book} loggedUserId={loggedUserId} />
                ) : (
                  <Link to="/login">Log in to add to cart</Link>
                )}
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
