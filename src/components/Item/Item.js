import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="contenedor">
      <div className="card is-4">
        <img src={img} alt={`product${name}`} className="image" />
        <h2>{name}</h2>
        <p>Stock {stock}</p>
        <p>Precio ${price}</p>
        <button>
          <Link to={`/item/${id}`} className="text">
            Ver detalle
          </Link>
        </button>
      </div>
    </div>

  );
};

export default Item;
