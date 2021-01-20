import React from 'react'
import {deleteOneThunk, fetchCart, updateBook} from '../store/cart'
import {connect} from 'react-redux'
import DeleteAllBooksFromCart from './DeleteAllBooksFromCart'
import LoadingSpinner from './loadingSpinner'
import Toastify from 'toastify-js'
import {NavLink} from 'react-router-dom'

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      quantities: [
        {
          bookId: 0,
          quantity: 6,
          totalPrice: 6
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  async componentDidMount() {
    const userId = Number(this.props.match.params.userId)

    await this.props.getCart(userId)
    const quantityInCart = this.props.cart.map(book => {
      return book.book_in_orders
    })
    this.setState({
      quantities: quantityInCart
    })
  }

  handleClick(bookId, event) {
    let index = 0

    this.state.quantities.map((item, idx) => {
      if (item[0].bookId === bookId) {
        index = idx
      }
    })

    const currentQuantitiesObject = this.state.quantities[index]
    const restOfQuantities = this.state.quantities.slice()

    restOfQuantities.splice(index, 1)
    currentQuantitiesObject[0].quantity++
    restOfQuantities.push(currentQuantitiesObject)
    restOfQuantities.sort(function(a, b) {
      return a.id - b.id
    })

    this.setState({
      quantities: restOfQuantities
    })
  }

  handleClickMinus(bookId, event) {
    let index = 0

    this.state.quantities.map((item, idx) => {
      if (item[0].bookId === bookId) {
        index = idx
      }
    })

    const currentQuantitiesObject = this.state.quantities[index]

    const restOfQuantities = this.state.quantities.slice()

    restOfQuantities.splice(index, 1)

    if (currentQuantitiesObject[0].quantity < 1) {
      currentQuantitiesObject[0].quantity = 0
    } else {
      currentQuantitiesObject[0].quantity--
    }

    restOfQuantities.push(currentQuantitiesObject)
    restOfQuantities.sort(function(a, b) {
      return a.id - b.id
    })

    this.setState({
      quantities: restOfQuantities
    })
  }

  async handleUpdate(book, event) {
    event.preventDefault()

    await this.setState({loading: true})
    const userId = Number(this.props.match.params.userId)
    await this.props.update(book, userId)

    await this.props.getCart(userId)
    const quantityInCart = this.props.cart.map(book => {
      return book.book_in_orders
    })
    this.setState({
      quantities: quantityInCart
    })

    await this.setState({
      loading: false
    })

    Toastify({
      text: `Your cart is updated :) `,
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

  handleRemove = bookObj => event => {
    event.preventDefault()
    const userId = Number(this.props.match.params.userId)

    this.props.deleteOneBook(userId, bookObj)
    Toastify({
      text: `Your item is removed :) `,
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
    const userId = Number(this.props.match.params.userId)

    if (this.props.cart.length === 0 || this.props.cart === undefined) {
      return <h1>cart is empty</h1>
    } else {
      const books = this.props.cart
      const subtotal = []

      return (
        <div className="cart-container">
          <section className="cart-box">
            <div className="cart-title-container">
              <h3>Cart Items</h3>
            </div>

            <div>
              {books.map(book => (
                <div key={book.id} className="cart-cell">
                  <div className="cart-image-container">
                    <img src={book.imageUrl} />
                  </div>

                  <div className="cart-rest-container">
                    <h4 className="cart-book-title">{book.title}</h4>
                    <div className="cart-book-unit-price">
                      $ {book.price / 100}
                    </div>

                    <div className="cart-quantity">
                      Qty :
                      <button
                        type="button"
                        className="minusplus"
                        onClick={this.handleClickMinus.bind(this, book.id)}
                      >
                        -
                      </button>
                      <div className="qty-input">
                        {this.state.loading ? (
                          <LoadingSpinner />
                        ) : (
                          this.state.quantities.map(item => {
                            if (Array.isArray(item)) {
                              if (item[0].bookId === book.id) {
                                return item[0].quantity
                              }
                            } else if (item.bookId === book.id) {
                              return item.quantity
                            }
                          })
                        )}
                      </div>
                      <button
                        type="button"
                        className="minusplus"
                        onClick={this.handleClick.bind(this, book.id)}
                      >
                        {' '}
                        +
                      </button>
                      <button
                        type="button"
                        className="update-quantity-button"
                        onClick={this.handleUpdate.bind(this, book)}
                      >
                        Update Quantity
                      </button>
                    </div>

                    <div className="cart-book-total-price">
                      Total Price: ${' '}
                      {this.state.quantities.map(item => {
                        if (Array.isArray(item)) {
                          if (item[0].bookId === book.id) {
                            subtotal.push(item[0].totalPrice / 100)
                            return item[0].totalPrice / 100
                          }
                        } else if (item.bookId === book.id) {
                          subtotal.push(item.totalPrice / 100)
                          return item.totalPrice / 100
                        }
                      })}
                    </div>

                    <div className="remove-button-container">
                      <button
                        type="button"
                        className="remove-from-cart-button"
                        onClick={this.handleRemove(book)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* <DeleteAllBooksFromCart userId={userId} /> */}
            </div>
          </section>

          <section className="sub-total-box">
            <div className="cart-title-container">
              <h3>Order Summary</h3>
            </div>
            <div className="cart-checkout-button-container">
              <div>Order Total: $ </div>
              <NavLink
                to={{
                  pathname: '/checkout',
                  prices: subtotal,
                  books: books,
                  userId: Number(this.props.match.params.userId)
                }}
                className="cart-checkout-button"
              >
                <button type="button" className="cart-checkout-button">
                  Continue to Checkout
                </button>
              </NavLink>
            </div>
          </section>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(fetchCart(userId)),
    update: (bookObj, userId) => dispatch(updateBook(bookObj, userId)),
    deleteOneBook: (userId, bookId) => dispatch(deleteOneThunk(userId, bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
