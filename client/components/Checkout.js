import React from 'react'
import {connect} from 'react-redux'

import {NavLink} from 'react-router-dom'
import {updateOrderStatus} from '../store/cart.js'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {}

  handleClick(event) {
    const userId = this.props.location.userId
    this.props.update(userId)
  }

  render() {
    const orderTotal = this.props.location.prices.reduce(
      (accum, currentPrice) => {
        return accum + currentPrice
      },
      0
    )
    const booksInOrder = this.props.location.books

    return (
      <div className="books-list">
        <p className="title">Order Details</p>
        <ul>
          {booksInOrder &&
            booksInOrder.map(book => (
              <div key={book.id}>
                <li>
                  <h4>Book Title : {book.title}</h4>
                  <div>Price: {book.price / 100}</div>
                  <img src={book.imageUrl} />
                </li>
              </div>
            ))}
        </ul>
        <div>Order Total: $ {orderTotal}</div>
        <NavLink
          to={{
            pathname: '/confirmation'
          }}
          onClick={this.handleClick}
          className="minusplus"
        >
          <button className="minusplus">Place Order</button>
        </NavLink>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    update: id => {
      dispatch(updateOrderStatus(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Checkout)
