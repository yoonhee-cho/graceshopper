import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/singleBook'

export class SingleBook extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadSingleBookInReact(this.props.match.params.bookId)
  }

  render() {
    const singleBook = this.props.singleBookInReact.singleBook

    return (
      <div className="books-list">
        <p>Book Details</p>
        {singleBook && (
          <div>
            <ul>
              <div key={singleBook.id}>
                <li className="single-book">
                  <h4>{singleBook.title}</h4>
                  <div>Price: {singleBook.price}</div>
                  <div>
                    <i>{singleBook.shortDescription}</i>
                  </div>
                  <div>Genre:{singleBook.category}</div>
                  <img src={singleBook.imageUrl} />
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
