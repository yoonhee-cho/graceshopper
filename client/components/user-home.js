import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllBooks from './AllBooks'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, userId, isAdmin, isLoggedIn} = props

  return (
    <div>
      {/* <h3 className="title"> Welcome {email ? email : 'user'}!</h3> */}
      <AllBooks
        loggedUserId={userId}
        isAdmin={isAdmin}
        isLoggedIn={isLoggedIn}
      />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id,
    isAdmin: state.user.isAdmin
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
