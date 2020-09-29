import React from 'react'
import {fetchUsers} from '../store/allUsers'
import {connect} from 'react-redux'

// import AddToCart from './AddToCart'

// import {Link} from 'react-router-dom'

class AllUsers extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.loadUsersInReact()
  }

  //NEED TO ADD the single user product
  handleClick = userId => event => {
    event.preventDefault()
    console.log('I am in handleClick AllUser', userId)
  }

  render() {
    const usersInReact = this.props.usersInReact.users
    return (
      <div className="users-list">
        <h3>Hello from All Users</h3>
        <ul>
          {usersInReact &&
            usersInReact.map(user => (
              <div key={user.id}>
                User Email: {user.email}
                User Order History:
                <button
                  className="editButton"
                  onClick={this.handleClick(user.id)}
                >
                  Edit User
                </button>
              </div>
            ))}
        </ul>
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

//export default AllUsers
