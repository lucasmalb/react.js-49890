import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card-container">
      <article>
        <header>
          <img src={img} alt={`product${name}`} className="image" />
        </header>
        <figure className="container">
          <h2>{name}</h2>
          <div className="overlay">
            <button>
              <Link to={`/item/${id}`} className="text">
                Ver detalle
              </Link>
            </button>
          </div>
        </figure>
        <section>
          <p>Precio ${price}</p>
          <p>Stock {stock}</p>
        </section>
      </article>
    </div>
  );
};

export default Item;
