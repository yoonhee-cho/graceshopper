import React from 'react'
import {addBookToCart} from '../store/cart'

import {connect} from 'react-redux'

export class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()

    const userId = this.props.user.id

    const book = this.props.book
    this.props.addBook(book, userId)
  }

  render() {
    const loggedUserId = this.props.loggedUserId
    return (
      <div className="addToCart">
        <button type="click" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (bookObj, userId) => dispatch(addBookToCart(bookObj, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
