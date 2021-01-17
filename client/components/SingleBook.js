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
      <div className="single-product-container">
        {singleBook &&
          authors && (
            <div>
              <div className="single-product-content" key={singleBook.id}>
                <div className="product-image">
                  <img src={singleBook.imageUrl} />
                </div>

                <div className="product-detail">
                  <h4 className="product-title">{singleBook.title}</h4>
                  <div className="product-author">
                    by{' '}
                    {authors.map(
                      (author, idx) =>
                        idx === authors.length - 1
                          ? `${author.firstName} ${author.lastName} `
                          : `${author.firstName} ${author.lastName} , `
                    )}
                  </div>
                  <div className="product-price">
                    $ {singleBook.price / 100}
                  </div>
                  <div className="product-genre">
                    Genre : {singleBook.category}
                  </div>
                  <div className="product-description">
                    Product Details : {singleBook.shortDescription}
                  </div>

                  {loggedUserId ? (
                    <AddToCart book={singleBook} />
                  ) : (
                    <Link to="/login">Login to Add to Cart</Link>
                  )}
                  {isAdmin ? (
                    <div>
                      <button className="minusplus" onClick={this.handleClick}>
                        Delete Book
                      </button>
                      <UpdateBook book={singleBook} />{' '}
                    </div>
                  ) : null}
                </div>
              </div>
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
