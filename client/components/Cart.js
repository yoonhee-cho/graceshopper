import React from 'react'
import {fetchCart, updateBook} from '../store/cart'

import {connect} from 'react-redux'

import DeleteAllBooksFromCart from './DeleteAllBooksFromCart'
import Checkout from './Checkout'
import LoadingSpinner from './loadingSpinner'
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
  }

  render() {
    const userId = Number(this.props.match.params.userId)

    if (this.props.cart.length === 0 || this.props.cart === undefined) {
      return <h1>cart is empty</h1>
    } else {
      const books = this.props.cart
      const subtotal = []
      return (
        <div className="books-list">
          <h3>Cart</h3>
          <ul>
            {books.map(book => (
              <div key={book.id}>
                <li className="single-book">
                  <h4>{book.title}</h4>

                  <div>
                    <i>{book.shortDescription}</i>
                  </div>
                  <div>Genre:{book.category}</div>
                  <div>Unit Price: $ {book.price / 100}</div>
                  <div>
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
                  <div>
                    Quantity:
                    <button onClick={this.handleClickMinus.bind(this, book.id)}>
                      -
                    </button>
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
                    <button onClick={this.handleClick.bind(this, book.id)}>
                      +
                    </button>
                    <button onClick={this.handleUpdate.bind(this, book)}>
                      Update Quantity
                    </button>
                  </div>

                  <img src={book.imageUrl} />
                </li>
              </div>
            ))}
            <div>
              <NavLink
                to={{
                  pathname: '/checkout',
                  prices: subtotal
                }}
              >
                {' '}
                Continue to Checkout{' '}
              </NavLink>
            </div>
            <DeleteAllBooksFromCart userId={userId} />
          </ul>
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
    update: (bookObj, userId) => dispatch(updateBook(bookObj, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
