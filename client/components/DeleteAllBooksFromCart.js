import React from 'react'
import {emptyCartThunk} from '../store/cart'
import {connect} from 'react-redux'

class DeleteAllBooksFromCart extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.emptyAllBooks(this.props.userId)
  }

  render() {
    return (
      <div>
        <button className="deleteButton" onClick={this.handleClick}>
          EMPTY CART
        </button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  emptyAllBooks: userId => dispatch(emptyCartThunk(userId))
})

export default connect(null, mapDispatch)(DeleteAllBooksFromCart)
