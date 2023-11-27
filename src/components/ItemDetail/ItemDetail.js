import ItemCount from "../ItemCount/ItemCount";

const ItemDetail= ({id, name, img, description, price, category, stock}) => {
    return(
        <article>
            <header>
                <h2>

                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>categoria:{category}</p>
                <p>descripcion:{description}</p>
                <p>precio:{price}</p>
            </section>
            <footer>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`cantidad agregada`, quantity)} />
            </footer>
        </article>
    )
}
export default ItemDetail;