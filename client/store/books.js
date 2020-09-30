import axios from 'axios'
import thunkMiddleware from 'redux-thunk'

//action constant
const GET_BOOKS = 'GET_BOOKS'

//action creator
const getBooks = books => {
  return {
    type: GET_BOOKS,
    books: books
  }
}

//thunk
export function fetchBooks() {
  return async dispatch => {
    try {
      const res = await axios.get('/api/books/')
      const books = res.data
      await dispatch(getBooks(books))
    } catch (err) {
      console.log(err)
    }
  }
}

export function addABook(bookObj) {
  return async dispatch => {
    try {
      await axios.post(`/api/admin/books`, bookObj)

      const books = await axios.get(`/api/books`)

      await dispatch(getBooks(books.data))
    } catch (error) {
      console.log(error)
    }
  }
}

//initial State
const initialState = []

//reducer func
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.books}
    default:
      return state
  }
}
