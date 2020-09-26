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
    console.log('this.props.singleBookInReact', this.props.singleBookInReact)
    // const singleBook = this.props.singleBookInReact.singleBook
    // console.log('this.props.singleBookInReact', this.props)

    return (
      <div className="books-list">
        <p>hello</p>
        {/* {singleBook && (
                    <div>
                        <ul>
                            <div key={singleBook.id}>
                                <li className="single-book">
                                    <h4>{singleBook.title}</h4>
                                    {/* <div>
                                    by{' '}
                                    {book.authors.map(
                                        (author, idx) =>
                                        idx === book.authors.length - 1
                                            ? `${author.firstName} ${author.lastName} `
                                            : `${author.firstName} ${author.lastName} , `
                                    )}
                                    </div> */}
        {/* <div>
                                    <i>{book.shortDescription}</i>
                                    </div>
                                    <div>Genre:{book.category}</div>
                                    <div>Price: {book.price}</div>
                    
                                    <img src={book.imageUrl} /> */}
        {/* </li>
                            </div>
                        
                        </ul>
                    </div>
                )} */}
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
