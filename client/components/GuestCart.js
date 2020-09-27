import React from 'react'
import {useState, useEffect} from 'react'

const GuestCart = () => {
  let [cart, setCart] = useState([])
  let localCart = localStorage.getItem('cart')

  const addItem = item => {}
  const updateItem = (itemID, amount) => {}
  const removeItem = itemID => {}

  //   this called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart)
    //load persisted cart into state if it exists
    if (localCart) localStorage.setItem('cart', localCart)
  }, []) //the empty array ensures useEffect only runs once

  console.log('setcart: ', setCart)
  console.log('localCart', localCart) // ["test", "doesitwork"] -> "test,doesitwork"
  return <div>HELLLLLO</div>
}

export default GuestCart
