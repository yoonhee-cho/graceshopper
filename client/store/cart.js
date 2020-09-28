import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

//action constant
const GET_CART = 'GET_CART'
const ADD_BOOK = 'ADD_BOOK'
const UPDATE_CART = 'UPDATE_CART'
const EMPTY_CART = 'EMPTY_CART'

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

const updateCart = books => {
  return {
    type: UPDATE_CART,
    books: books
  }
}

const emptyCart = userId => {
  return {
    type: EMPTY_CART,
    userId: userId
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
      alert('You are not an authorized user to make changes to this account')
      console.log(err)
    }
  }
}
/// need to write a post route to a users cart

export function addBookToCart(bookObj, userId) {
  return async dispatch => {
    try {
      console.log('>>>>>>>', typeof userId)
      // const book = axios.get(//book by bookId//)

      await axios.post(`/api/users/${userId}/cart`, bookObj)
    } catch (error) {
      alert(
        'This item is already in your cart. If you wish to update the quantity, please visit your cart. :) '
      )
      console.log(error)
    }
  }
}

export function updateBook(book, userId) {
  return async dispatch => {
    try {
      await axios.put(`/api/users/${userId}/cart`, book)
      const res = await axios.get(`/api/users/${userId}/cart`)
      await dispatch(updateCart(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}

//Thunk Creator for DELETE ALL items in cart
export const emptyCartThunk = userId => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}/cart`)
    const {data} = await axios.get(`/api/users/${userId}/cart`)
    await dispatch(getCart(data))
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
