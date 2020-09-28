// import {render} from 'enzyme'
// import React from 'react'
// import guestcart from './GuestCart'

// //Get the bookObj from AllBooks or from SingleBook component as this.props.book

// //If I pass down the func in GuestCart as a props to GuestButton, can I call it here this.props.addItems(this.props.book)?

// //local state is the cart array and map it out , if none render button if yes render

// export default class GuestButton extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isClicked: false,
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(event) {
//     event.preventDefault()
//     this.setState({
//       isClicked: true,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button className="addButton">Add to Cart(Guest)</button>
//         {this.isClicked ? <guestcart book={this.props.book} /> : null}
//       </div>
//     )
//   }
// }
