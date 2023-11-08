function ItemListContainer(Props){
    return (
        <div>
            <img src={Props.img} alt="logo"/>
            <h3>{Props.titulo}</h3>
            <p>{Props.precio}</p>
        </div>
    )
}
export default ItemListContainer;