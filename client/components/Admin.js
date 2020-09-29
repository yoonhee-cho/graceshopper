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
/**
 * COMPONENT
 */
class Admin extends Component {
  //   componentDidMount() {
  //     this.props.loadInitialData()
  //   }

  render() {
    // const {isAdmin} = this.props
    return (
      <div>
        <h3>Hello Admin </h3>
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

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     },
//   }
// }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
export default withRouter(connect(mapState, null)(Admin))

// /**
//  * PROP TYPES
//  */
// // AdminHome.propTypes = {
// //   loadInitialData: PropTypes.func.isRequired,
// //   isAdmin: PropTypes.bool.isRequired,
// // }
