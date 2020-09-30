import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook, deleteBook} from '../store/singleBook'
import AddToCart from './AddToCart'
import {Link} from 'react-router-dom'
import UpdateBook from './UpdateBook'

export class SingleBook extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleBookInReact(this.props.match.params.bookId)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.delete(this.props.singleBookInReact.singleBook.id)
  }

  render() {
    const singleBook = this.props.singleBookInReact.singleBook
    const authors = this.props.singleBookInReact.singleBook.authors
    const loggedUserId = this.props.loggedInUserId
    const isAdmin = this.props.isAdmin
    return (
      <div className="books-list">
        <p className="title">
          <i>Book Details</i>
        </p>
        {singleBook &&
          authors && (
            <div>
              <ul>
                <div key={singleBook.id}>
                  <li className="single-book">
                    <h4>{singleBook.title}</h4>
                    <div>
                      by{' '}
                      {authors.map(
                        (author, idx) =>
                          idx === authors.length - 1
                            ? `${author.firstName} ${author.lastName} `
                            : `${author.firstName} ${author.lastName} , `
                      )}
                    </div>
                    <div>Price: $ {singleBook.price / 100}</div>
                    <div>
                      <i>{singleBook.shortDescription}</i>
                    </div>
                    <div>Genre:{singleBook.category}</div>
                    <img src={singleBook.imageUrl} />
                    {loggedUserId ? (
                      <AddToCart book={singleBook} />
                    ) : (
                      <Link to="/login">Login to Add to Cart</Link>
                    )}
                    {isAdmin ? (
                      <div>
                        <button
                          className="minusplus"
                          onClick={this.handleClick}
                        >
                          Delete Book
                        </button>
                        <UpdateBook book={singleBook} />{' '}
                      </div>
                    ) : null}
                  </li>
                </div>
              </ul>
            </div>
          )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleBookInReact: state.singleBook,
    isAdmin: state.user.isAdmin,
    loggedInUserId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleBookInReact: id => {
      dispatch(fetchSingleBook(id))
    },
    delete: id => {
      dispatch(deleteBook(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleBook)
