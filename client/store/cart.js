import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import Toastify from 'toastify-js'

//action constant
const GET_CART = 'GET_CART'
const ADD_BOOK = 'ADD_BOOK'
const UPDATE_CART = 'UPDATE_CART'

//action creator
const getCart = cart => {
  return {
    type: GET_CART,
    cart: cart
  }
}

const updateCart = books => {
  return {
    type: UPDATE_CART,
    books: books
  }
}

//thunk
export function fetchCart(userId) {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/${userId}/cart`)
      const cart = await res.data
      dispatch(getCart(cart))
    } catch (err) {
      alert('You are not an authorized to make changes to this account')
      console.log(err)
    }
  }
}
/// need to write a post route to a users cart

export function addBookToCart(bookObj, userId) {
  return async dispatch => {
    try {
      // const book = axios.get(//book by bookId//)

      await axios.post(`/api/users/${userId}/cart`, bookObj)
      Toastify({
        text: `${bookObj.title} has been added to your cart `,
        duration: 3000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        stopOnFocus: true
      }).showToast()
    } catch (error) {
      Toastify({
        text: `${
          bookObj.title
        } is already in your cart. If you wish to update the quantity, please visit your cart. :) `,
        duration: 5000,
        destination: 'https://github.com/apvarun/toastify-js',
        newWindow: true,
        close: true,
        gravity: 'top',
        position: 'center',
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        stopOnFocus: true
      }).showToast()
      console.log(error)
    }
  }
}

export function updateBook(book, userId) {
  return async dispatch => {
    try {
      await axios.put(`/api/users/${userId}/cart`, book)
      const res = await axios.get(`/api/users/${userId}/cart`)
      dispatch(updateCart(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function updateOrderStatus(userId) {
  return async dispatch => {
    try {
      const completed = await axios.get(`/api/users/${userId}/completed`)
      const completedOrders = completed.data
      const res = await axios.post(`/api/users/${userId}/completed`)
    } catch (error) {
      console.log(error)
    }
  }
}

export const emptyCartThunk = userId => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}/cart`)
    const {data} = await axios.get(`/api/users/${userId}/cart`)
    dispatch(getCart(data))
  }
}

export const deleteOneThunk = (userId, bookObj) => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}/cart`, {data: bookObj})
    const {data} = await axios.get(`/api/users/${userId}/cart`)
    dispatch(getCart(data))
  }
}
//initial State
const initialState = []
//reducer func

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return action.books

    case ADD_BOOK:
      const bookToAdd = action.book
      return [...state, bookToAdd]

    case GET_CART:
      return action.cart

    default:
      return state
  }
}
