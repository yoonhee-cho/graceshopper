// import React from 'react'
// import {useState, useEffect} from 'react'

// const guestcart = props => {
//   let [cart, setCart] = useState([])

//   let localCart = localStorage.getItem('cart')
//   const bookObj = props.book
//   const addItem = bookObj => {
//     localStorage.setCart(bookObj)
//   }
//   const updateItem = (itemID, amount) => {}
//   const removeItem = itemID => {}

//   //get an array of item, maybe then display it here
//   const showItem = () => {
//     localStorage.getItem('cart')
//   }
//   const itemsInCart = showItem()

//   useEffect(() => {
//     //turn it into js
//     localCart = JSON.parse(localCart)
//     //load persisted cart into state if it exists
//     if (localCart) localStorage.setItem('cart', localCart)
//   }, []) //the empty array ensures useEffect only runs once
//   console.log('From GuestCart')
//   return <div>Hi from Guest Cart FUNC</div>
// }

// export default guestcart
