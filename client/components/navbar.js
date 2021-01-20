import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, isAdmin, userId}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        isAdmin ? (
          <header>
            <h1 className="logo">HYKM BOOKS</h1>
            <ul className="menu">
              <li>
                <Link to="/home">All Books</Link>
              </li>
              <li>
                <Link to="/admin/users">All Users</Link>
              </li>
              <li>
                <Link to={'/' + userId + '/cart'}>Cart</Link>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </header>
        ) : (
          <header>
            {/* The navbar will show these links after you log in */}
            <h1 className="logo">HYKM BOOKS</h1>
            <ul className="menu-container">
              <li>
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/home">
                  All Books
                </Link>
              </li>
              <li>
                <Link className="link" to={'/' + userId + '/cart'}>
                  Cart
                </Link>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </header>
        )
      ) : (
        <header>
          {/* The navbar will show these links before you log in */}
          <h1 className="logo">HYKM BOOKS</h1>
          <ul className="menu">
            <li>
              <Link to="/books">All Books</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </header>
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
