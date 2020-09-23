import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

//action constant
const GET_CART = 'GET_CART'

//action creator
const getCart = cart => {
  return {
    type: GET_CART,
    cart: cart
  }
}

//thunk
export function fetchCart(userId) {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/${userId}/cart`)
      const cart = await res.data
      // console.log('i am here at fetchCart thunk')
      // console.log('cart', cart)
      await dispatch(getCart(cart))
    } catch (err) {
      console.log(err)
    }
  }
}
//initial State
const initialState = []
//reducer func

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
