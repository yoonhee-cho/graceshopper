import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/singleBook'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.location.prices)
  }

  render() {
    const orderTotal = this.props.location.prices.reduce(
      (accum, currentPrice) => {
        return accum + currentPrice
      },
      0
    )

    return (
      <div className="books-list">
        <p>Order Details</p>
        <div>Order Total: $ {orderTotal}</div>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    loadSingleBookInReact: id => {
      dispatch(fetchSingleBook(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Checkout)
