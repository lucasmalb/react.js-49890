import Cart from "./img/Cart.svg";
function CartWidget(){
    return (
        <div>
            <img src={Cart}/>
            <span>0</span>
        </div>
    )
}
export default CartWidget