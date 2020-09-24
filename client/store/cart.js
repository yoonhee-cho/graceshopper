import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

//action constant
const GET_CART = 'GET_CART'
const ADD_BOOK = 'ADD_BOOK'

//action creator
const getCart = cart => {
  return {
    type: GET_CART,
    cart: cart
  }
}

const addBook = book => {
  return {
    type: ADD_BOOK,
    book: book
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
/// need to write a post route to a users cart

export function addBookToCart(bookObj) {
  return async dispatch => {
    try {
      // const book = axios.get(//book by bookId//)
      await axios.post(`/api/users/1/cart`, bookObj)
    } catch (error) {
      console.log(error)
    }
  }
}
//initial State
const initialState = []
//reducer func

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      const bookToAdd = action.book
      return [...state, bookToAdd]
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
