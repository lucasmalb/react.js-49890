import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price }) => {
  return (
    <div className="contenedor">
      <div className="card is-4">
        <img src={img} alt={`product${name}`} className="image" />
        <h2 className="nombreProducto">{name}</h2>
        <p className="precioProducto">Precio: ${price}</p>
        
          <Link to={`/item/${id}`} className="item-link">
            Ver detalle
          </Link>
        
      </div>
    </div>

  );
};

export default Item;
