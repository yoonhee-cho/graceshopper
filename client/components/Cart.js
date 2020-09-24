import React from 'react'
import {fetchCart} from '../store/cart'
import {connect} from 'react-redux'

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantities: [
        {
          bookId: 0,
          quantity: 6
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
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
    console.log(this.state.quantities, 'QUANTITIES')
  }

  handleClick(event) {
    event.preventDefault()
    const currentQty = this.state.quantities
    console.log(currentQty)
    this.setState({quantity: currentQty + 1})
  }

  handleClickMinus(event) {
    event.preventDefault()
    const currentQty = this.state.quantities
    if (currentQty > 0) {
      this.setState({quantity: currentQty - 1})
    } else {
      this.setState({quantity: 0})
    }
  }

  render() {
    if (this.props.cart.length === 0 || this.props.cart === undefined) {
      return <h1>cart is empty</h1>
    } else {
      const books = this.props.cart
      console.log('books', books)
      // console.log('this.props.cart', this.props.cart)

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
                  <div>Price: $ {book.price / 100}</div>
                  <div>
                    Quantity:
                    <button onClick={this.handleClickMinus}>-</button>
                    {this.state.quantities.map(item => {
                      if (Array.isArray(item)) {
                        if (item[0].bookId === book.id) {
                          return item[0].quantity
                        }
                      } else if (item.bookId === book.id) {
                          return item.quantity
                        }
                    })}
                    <button onClick={this.handleClick}>+</button>
                  </div>

                  <img src={book.imageUrl} />
                </li>
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {cart: state.cart}
}

const mapDispatchToProps = dispatch => {
  return {getCart: userId => dispatch(fetchCart(userId))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
