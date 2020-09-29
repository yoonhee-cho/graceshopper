import axios from 'axios'
import history from '../history'

const GET_ALL_USERS = 'GET_ALL_USERS'

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users: users
})

export function fetchUsers() {
  return async dispatch => {
    try {
      const res = await axios.get('/api/admin/users')
      const users = res.data
      dispatch(getAllUsers(users))
    } catch (error) {
      console.log('fetchUsers has error: ', error)
    }
  }
}

const initialState = []

/**
 * REDUCER
 */
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    default:
      return state
  }
}
