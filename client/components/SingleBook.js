import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/singleBook'
import AddToCart from './AddToCart'

export class SingleBook extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadSingleBookInReact(this.props.match.params.bookId)
  }

  render() {
    const singleBook = this.props.singleBookInReact.singleBook
    const authors = this.props.singleBookInReact.singleBook.authors

    return (
      <div className="books-list">
        <p>Book Details</p>
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
                    <AddToCart book={singleBook} />
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
    singleBookInReact: state.singleBook
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleBookInReact: id => {
      dispatch(fetchSingleBook(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleBook)
