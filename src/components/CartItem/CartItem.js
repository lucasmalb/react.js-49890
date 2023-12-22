import { useContext } from "react"
import { CartContext } from "../../components/CartContext/CartContext"
import "./CartItem.css";

const CartItem = ({ title, price, id,img, quantity }) => {

  const { removeItem, } = useContext(CartContext)
  
 
  return (
    <div className="CartItem">

      <h2 >{title}</h2>
      <img src={img} alt={title}/>
      <p>Cantidad:{quantity}</p>
      <p>Subtotal:{price * quantity}</p>
    
      
      <button onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CartItem;