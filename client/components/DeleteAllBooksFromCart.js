import React from 'react'
import {emptyCartThunk} from '../store/cart'
import {connect} from 'react-redux'
import Toastify from 'toastify-js'
class DeleteAllBooksFromCart extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.emptyAllBooks(this.props.userId)
    Toastify({
      text: `All items are removed`,
      duration: 3000,
      destination: 'https://github.com/apvarun/toastify-js',
      newWindow: true,
      close: true,
      gravity: 'top',
      position: 'center',
      backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
      stopOnFocus: true
    }).showToast()
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
