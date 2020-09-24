import React from 'react'

// import {connect} from 'react-redux'

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {}

  handleClick(event) {
    event.preventDefault()
    console.log('hello i got clicked')
  }

  render() {
    return (
      <div className="addToCart">
        <button type="click" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}
