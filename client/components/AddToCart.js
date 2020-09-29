import React from 'react'
import {addBookToCart, fetchCart} from '../store/cart'
import {connect} from 'react-redux'
import Toastify from 'toastify-js'

export class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const userId = this.props.user.id
    this.props.getCart(userId)
  }

  handleClick(event) {
    event.preventDefault()

    const userId = this.props.user.id

    const book = this.props.book
    this.props.addBook(book, userId)
    const bookInCart = this.props.cart.reduce((accum, book) => {
      if (book.id === this.props.book.id) {
        accum.push(book.id)
      }
      return accum
    }, [])
    console.log('bookInCart', bookInCart)
    console.log('cart', this.props.cart)

    if (bookInCart.length === 1) {
      Toastify({
        text: `${
          this.props.book.title
        } is already in your cart. If you wish to update the quantity, please visit your cart. :) `,
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        stopOnFocus: true
      }).showToast()
    } else {
      Toastify({
        text: `${this.props.book.title} is added to your cart `,
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
  }

  render() {
    const loggedUserId = this.props.loggedUserId

    return (
      <div className="addToCart">
        <i className="fas fa-shopping-cart" />
        <button type="click" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (bookObj, userId) => dispatch(addBookToCart(bookObj, userId)),
    getCart: userId => dispatch(fetchCart(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
