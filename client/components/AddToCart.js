import React from 'react'
import {addBookToCart, fetchCart} from '../store/cart'
import {connect} from 'react-redux'

export class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const userId = this.props.user.id
    await this.props.getCart(userId)
  }

  async handleClick(event) {
    event.preventDefault()

    const userId = this.props.user.id

    const book = this.props.book
    await this.props.addBook(book, userId)
    const bookInCart = this.props.cart.reduce((accum, book) => {
      if (book.id === this.props.book.id) {
        accum.push(book.id)
      }
      return accum
    }, [])
  }

  render() {
    const loggedUserId = this.props.loggedUserId

    return (
      <div className="addToCart">
        <i className="fas fa-shopping-cart" />
        <button
          className="addToCartButton"
          type="click"
          onClick={this.handleClick}
        >
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
