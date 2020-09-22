import React from 'react'
import {fetchBooks} from '../store/books'
import {connect} from 'react-redux'

export class AllBooks extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const books = this.props.books
    console.log(books)
    return (
      <div className="books-list">
        <h3>Books</h3>
        <ul>
          {books.map(book => (
            <div key={book.id}>
              <li className="single-book">
                <h4>{book.title}</h4>
                <div>
                  <i>{book.shortDescription}</i>
                </div>
                <div>Genre:{book.category}</div>
                <div>Price: {book.price}</div>

                <img src={book.imageUrl} />
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {books: state.books}
}

const mapDispatchToProps = dispatch => {
  return {getBooks: () => dispatch(fetchBooks())}
}
export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
