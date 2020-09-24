import React from 'react'
import {fetchCart} from '../store/cart'
import {connect} from 'react-redux'

export class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickMinus = this.handleClickMinus.bind(this)
  }

  async componentDidMount() {
    const userId = Number(this.props.match.params.userId)
    await this.props.getCart(userId)
  }

  handleClick(event) {
    event.preventDefault()
    const currentQty = this.state.quantity
    this.setState({quantity: currentQty + 1})
  }

  handleClickMinus(event) {
    event.preventDefault()
    const currentQty = this.state.quantity
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
                    {this.state.quantity}
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
