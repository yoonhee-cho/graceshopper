import React from 'react'
import {connect} from 'react-redux'
import {
  getLocalCart,
  removeCartItem,
  updateGuestItemQuant
} from '../store/guestCart'
import SingleBook from './SingleBook'

export class GuestCart extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount() {
    this.props.getGuestCart()
  }

  //   removeItem(id) {
  //     this.props.removeItemFromCart(id)
  //   }

  //   handleChange(event, id) {
  //     this.props.changeGuestCartQty(event.target.value, id)
  //   }

  render() {
    console.log('THIS.PROPS: ', this.props)
    console.log('THIS.OBJECT.VALUE: ', Object.values(this.props))

    return (
      <div>
        <h1>Guest Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Book</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          {/* <tbody>{Object.values(this.props.guestCart)}</tbody> */}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guestCart: state.guestCart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGuestCart: () => dispatch(getLocalCart()),
    removeItemFromCart: id => dispatch(removeCartItem(id)),
    changeGuestCartQty: (val, id) => dispatch(updateGuestItemQuant(val, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestCart)
