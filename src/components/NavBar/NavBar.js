import CartWidget from "./CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className="market">
                <Link to='/'><h1 className="titulo">Market</h1></Link>
                <input placeholder="Buscar Productos..."></input>
                <CartWidget/>
            </div>
            <div className="button">
                <NavLink to={`/category/Cafe`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="botonesProd">Cafes</button></NavLink>
                <NavLink to={`/category/Lacteos`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="botonesProd">Lacteos</button></NavLink>
                <NavLink to={`/category/Galletitas`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="botonesProd">Galletitas</button></NavLink>

            </div>
        </nav>
    )
}
export default NavBar;
