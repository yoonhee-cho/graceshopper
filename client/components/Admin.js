import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
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
      price: null,
      qty: null,
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

  handleSubmit(event) {
    try {
      event.preventDefault()
      const bookObj = {}
      bookObj.title = this.state.title
      bookObj.price = Math.floor(this.state.price * 100)
      bookObj.qty = this.state.qty
      bookObj.category = this.state.category
      bookObj.authors = [this.state.author]

      this.props.add(bookObj)
      this.setState({
        title: '',
        price: null,
        qty: null,
        category: '',
        author: ''
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div>
        <h3>Hello Admin </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
          />
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <button type="submit" className="minusplus">
            Add New Book
          </button>
        </form>
        <UserHome
          isAdmin="true"
          isLoggedIn="true"
          loggedUserId={this.props.loggedUserId}
        />
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
