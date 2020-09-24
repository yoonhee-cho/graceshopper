import React from 'react'
import {addBookToCart} from '../store/cart'

import {connect} from 'react-redux'

export class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {}

  handleClick(event) {
    event.preventDefault()
    const book = this.props.book
    this.props.addBook(book)
  }

  render() {
    return (
      <div className="addToCart">
        <button type="click" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {}
// }

const mapDispatchToProps = dispatch => {
  return {
    addBook: bookObj => dispatch(addBookToCart(bookObj))
  }
}

export default connect(null, mapDispatchToProps)(AddToCart)
