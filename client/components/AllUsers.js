import React from 'react'
import {fetchUsers} from '../store/allUsers'
import {connect} from 'react-redux'

import AddToCart from './AddToCart'

import {Link} from 'react-router-dom'

export class AllUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadUsersInReact()
  }

  render() {
    return (
      <div className="users-list">
        <h3>All Users</h3>

        {/* {this.props.usersInReact.allUsers &&
          this.props.usersInReact.allUsers.map((user) => (
            <div key={user.id}>
              <ul>User Id : {user.id}</ul>
              <ul>User Email: {user.email}</ul>
              <ur>User Order History: </ur>
            </div>
          ))} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    usersInReact: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {loadUsersInReact: () => dispatch(fetchUsers())}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
