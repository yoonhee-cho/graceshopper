import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin, userId}) => (
  <div>
    <h1 className="title">
      <i>HYKM BOOKS</i>
    </h1>

    <nav>
      {isLoggedIn ? (
<<<<<<< HEAD
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to={'/' + userId + '/cart'}>Cart</Link>
          <Link to="/books">Books</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
=======
        isAdmin ? (
          <div>
            <Link to="/admin/books">All Books</Link>
            <Link to="/admin/users">All Users</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={'/' + userId + '/cart'}>CART</Link>
            <Link to="/books">AllBooks</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        )
>>>>>>> 05d5cc6eff549f2b6c648de632867d3438d63f42
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/books">AllBooks</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userId: state.user.id,
    isAdmin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
