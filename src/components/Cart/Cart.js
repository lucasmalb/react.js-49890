import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
export const Cart =()=>{
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    if (totalQuantity === 0){
        return(
            <div>
                <h1>
                    No hay Productos en el carrito
                </h1>
                <Link to='/' className="option">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            {
                cart.map(p=> <CartItem key={p.id} {...p}/>) }
                <h3>Total:${total}</h3>
                <button onClick={() => clearCart()} className="">Limpiar carrito</button>
                <Link to='/checkout'>chekout</Link>
        </div>
    )
}


