import Cart from "./img/Cart.svg";
function CartWidget(){
    return (
        <div>
            <img src={Cart} alt="logo"/>
            <span>0</span>
        </div>
    )
}
export default CartWidget