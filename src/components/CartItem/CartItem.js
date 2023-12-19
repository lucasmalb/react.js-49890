import { useContext } from "react"
import { CartContext } from "../../components/CartContext/CartContext"
import { useState, useEffect } from "react"

const CartItem = ({ title, price, id, quantity }) => {

  const { removeItem, totalPrice } = useContext(CartContext)
  
 
  return (
    <div>

      <h2 >{title}</h2>
      <p>Cantidad:{quantity}</p>
      <p>Subtotal:{price * quantity}</p>
    
      
      <button onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CartItem;