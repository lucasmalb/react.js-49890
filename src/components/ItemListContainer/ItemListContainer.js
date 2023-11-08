import "./ItemListContainer.css"
import {useState} from "react"
function ItemListContainer(greeting){
    const [count, setCount]= useState (0);

    function handleClick(){
        setCount (count + 1)
    }


    return (
        <div className="card is-4">
            <div>
                <img className="image is 1by1" src={greeting.img} alt="logo"/>
                <h3 className="tittle is-4">{greeting.titulo}</h3>
                <p className="subtitle is-6">{greeting.precio}</p>
                <span>likes {count}</span> esto hiria n  CartWidget
                <button onClick={handleClick}>Agregar carrito</button>
            </div>
        </div>
    )
}
export default ItemListContainer;