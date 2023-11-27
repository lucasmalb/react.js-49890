import "../Item/Item.css";
import { Link } from "react-router-dom";


const Item = ({id, stock, name,img,price})=>{
    return(
        <div className="Contenedor">
            <div>
                <header>
                    <img src={img} alt={name}/>
                </header>
               <aection>
               <h2>{name}</h2>
               <p>precio:${price}</p>
               <p>Stock disponible:{stock}</p>
               </aection>
               <footer>
                    <Link to={`/item/${id}`}>
                        Ver detalle
                    </Link>
               </footer>
                

            </div>
        </div>
    )
}
export default Item;