// import React from 'react'
// import {editABook} from '../store/singleBook'
// import {connect} from ‘react-redux’
// class EditBook extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(event) {
//     event.preventDefault()
//     this.props.update()
//   }
//   render() {
//     //Pass down
//     //const bookObj = this.props.book
//     return (
//       <div>
//         <button className="minusplus" type="click" onClick={this.handleClick}>
//           Edit Book
//         </button>
//       </div>
//     )
//   }
// }
// // const mapStateToProps = (state) => {
// //   return {
// //     user: state.user,
// //     cart: state.cart,
// //   }
// // }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     update: (bookObj) => dispatch(editABook(bookObj))

//   }
// }
// export default connect(null, mapDispatchToProps)(EditBook)
