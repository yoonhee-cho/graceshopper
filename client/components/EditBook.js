import React from 'react'
//import {connect} from ‘react-redux’
class EditBook extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    event.preventDefault()
  }
  render() {
    //Pass down
    //const bookObj = this.props.book
    return (
      <div>
        <button className="minusplus" type="click" onClick={this.handleClick}>
          Edit Book
        </button>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     cart: state.cart,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBook: (bookObj, userId) => dispatch(addBookToCart(bookObj, userId)),
//     getCart: (userId) => dispatch(fetchCart(userId)),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
export default EditBook
