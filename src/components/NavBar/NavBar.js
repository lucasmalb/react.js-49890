import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css";


function NavBar(){
    return(
        <nav>
            <div className="NavBar">
                <h1>Market</h1>
                <input></input>
                <CartWidget/>
            </div>
            
        </nav>
    )
}
export default NavBar