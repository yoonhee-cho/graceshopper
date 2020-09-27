const GET_LOCAL_CART = 'GET_LOCAL_CART'
const REMOVE_GUEST_CART_ITEM = 'REMOVE_GUEST_CART_ITEM'
const ADD_BOOK_TO_GUEST_CART = 'ADD_BOOK_TO_GUEST_CART'

const gotCart = localCart => {
  return {
    type: GET_LOCAL_CART,
    localCart
  }
}

const removedItem = cart => {
  return {
    type: REMOVE_GUEST_CART_ITEM,
    cart
  }
}

const addedBook = increasedCart => {
  return {
    type: ADD_BOOK_TO_GUEST_CART,
    increasedCart
  }
}

export const getLocalCart = () => {
  return dispatch => {
    // localStorage.clear()
    let cart = localStorage.getItem('BOOK')
    // cart = cart ? JSON.parse(cart) : {}
    dispatch(gotCart(cart))
    localStorage.setItem('BOOK', JSON.stringify(cart))
  }
}

export const removeCartItem = id => {
  return dispatch => {
    let cart = localStorage.getItem('BOOK')
    cart = JSON.parse(cart)

    delete cart[id]
    dispatch(removedItem(cart))
    localStorage.setItem('BOOK', JSON.stringify(cart))
  }
}

export const addBook = book => {
  return dispatch => {
    let cart = localStorage.getItem('BOOK')
    cart = JSON.parse(cart)

    cart[book.id] = book
    dispatch(addedBook(cart))
    localStorage.setItem('BOOK', JSON.stringify(cart))
  }
}

export default function guestCartReducer(state = {}, action) {
  switch (action.type) {
    case GET_LOCAL_CART:
      return action.localCart
    case REMOVE_GUEST_CART_ITEM:
      return action.cart
    case ADD_BOOK_TO_GUEST_CART:
      return action.increasedCart
    default:
      return state
  }
}
