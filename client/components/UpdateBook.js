import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {editABook} from '../store/singleBook'
export class UpdateBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'title',
      price: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.title, 'TITLE')
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      this.props.book.title = this.state.title
      this.props.book.price = this.state.price
      this.props.update(this.props.book)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">New Title</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="price">New Price</label>
          <input type="text" name="price" onChange={this.handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: bookObj => dispatch(editABook(bookObj))
  }
}
export default connect(null, mapDispatchToProps)(UpdateBook)
