import ItemCount from "../ItemCount/ItemCount";
import  "../ItemDetail/ItemDetail.css";
const ItemDetail= ({id, name, img, description, price, category, stock}) => {
    return(
        <div className="divContenedor">
            <div className="img">
            <img src={img} alt={name}/>
            </div>
            <div className="contenido">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`cantidad agregada`, quantity)} />
            <p><strong>precio:</strong>{price}</p>
            <p><strong>categoria:</strong>{category}</p>
            <p><strong>descripcion:</strong>{description}</p>
            
                
            </div>
            
            
        </div>
       
    )
}
export default ItemDetail;