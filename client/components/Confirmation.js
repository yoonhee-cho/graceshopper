import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/singleBook'
import {NavLink} from 'react-router-dom'

export class Checkout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="books-list">
        <p>OMG THANK YOU SOOO MUCH FOR YOUR ORDER!!!</p>
        <div>one order of textbooks coming right up!</div>
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
