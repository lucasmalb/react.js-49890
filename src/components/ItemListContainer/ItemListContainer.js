import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from "../../AsynMock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const {categoryId}= useParams()

    useEffect(() => {
        const AsynFunc = categoryId ? getProductsByCategory : getProducts
        AsynFunc(categoryId)
        .then((response) => {
            setProducts(response)
        })
        .catch((error) =>{console.error(error)
        })
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting} bienvenido</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;