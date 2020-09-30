import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import AllBooks from './AllBooks'
// import {me} from './store'
import SingleBook from './SingleBook'
import navbar from './navbar'
import AllUsers from './AllUsers'
import {UserHome} from './user-home'
import {addABook} from '../store/books'
/**
 * COMPONENT
 */
class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      price: 0,
      qty: 0,
      category: '',
      author: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {}
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      const bookObj = {}
      bookObj.title = this.state.title
      bookObj.price = Math.floor(this.state.price * 100)
      bookObj.qty = this.state.qty
      bookObj.category = this.state.category
      bookObj.authors = [this.state.author]
      console.log(this.props, 'is ADD here?')
      this.props.add(bookObj)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    // const {isAdmin} = this.props
    return (
      <div>
        <h3>Hello Admin </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="price">Price</label>
          <input type="text" name="price" onChange={this.handleChange} />
          <label htmlFor="qty">Quantity</label>
          <input type="number" name="qty" onChange={this.handleChange} />
          <label htmlFor="category">Category</label>
          <input type="text" name="category" onChange={this.handleChange} />
          <label htmlFor="author">Author</label>
          <input type="text" name="author" onChange={this.handleChange} />
          <button type="submit" className="minusplus">
            Add New Book
          </button>
        </form>
        <UserHome
          isAdmin="true"
          isLoggedIn="true"
          loggedUserId={this.props.loggedUserId}
        />

        {/* <AllBooks /> */}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    loggedUserId: state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    add: bookObj => {
      dispatch(addABook(bookObj))
    }
  }
}

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
export default withRouter(connect(mapState, mapDispatch)(Admin))

// /**
//  * PROP TYPES
//  */
// // AdminHome.propTypes = {
// //   loadInitialData: PropTypes.func.isRequired,
// //   isAdmin: PropTypes.bool.isRequired,
// // }
