import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import booksReducer from './books'
import singleBookReducer from './singleBook'
import cartReducer from './cart'
import usersReducer from './allUsers'

const reducer = combineReducers({
  user: user,
  books: booksReducer,
  singleBook: singleBookReducer,
  cart: cartReducer,
  allUsers: usersReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
