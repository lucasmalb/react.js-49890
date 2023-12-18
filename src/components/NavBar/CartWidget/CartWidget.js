import Cart from "./img/Cart.svg";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";


function CartWidget(){
    const {totalQuantity} = useContext(CartContext)
    return (
        <div>
            <Link to="/cart" style={{display:totalQuantity > 0 }}>
            <img src={Cart} alt="logo"/>
            {totalQuantity}
            </Link>
        </div>
    )
}
export default CartWidget
