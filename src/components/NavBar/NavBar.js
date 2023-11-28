import CartWidget from "./CartWidget/CartWidget"
import "../NavBar/NavBar.css"
import { NavLink, Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="market">
                <Link to='/'><h1>market</h1></Link>
                <input></input>
                <CartWidget/>
            </div>
            <div className="button">
                <NavLink to={`/category/Cafe`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button>Cafes</button></NavLink>
                <NavLink to={`/category/Lacteos`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button>Lacteos</button></NavLink>
                <NavLink to={`/category/Galletitas`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button>Galletitas</button></NavLink>

            </div>
        </nav>
    )
}
export default NavBar;