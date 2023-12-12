import { useContext, useState } from "react";
import { db } from "../../config/Firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../CartContext/CartContext";
import { Timestamp, collection, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [cart, total, clearCart] = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const orderObj = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            };

            const batch = writeBatch(db);
            const autoStock = [];
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromfirestore = await getDocs(query{ productsRef, whre(documentId(), 'in'.)
        })
        const { docs } = productsAddedFromfirestore
        docs.forEach(doc => {
            const dataDoc =doc.data()
            const stockDb= dataDoc.stock
            const productAdeddToCart = cart.fine(prod=>prod.id === doc.id)
            const prodQuantity =productAdeddToCart?.quantity 
            if(stockDb >= prodQuantity){
                batch.update(doc.ref,{stock: stockDb - prodQuantity})
            }
            else{
                outOfStock.push({id:doc.id, ...dataDoc})
            }
        });
        if (outOfStock.length === 0){
            await batch.commit()
            const orderRef = collection (db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            setOrderId(orderAdded.id)
            clearCart()
        } else{
            console.error ('hay productos que estan fuera de stck')

        }


    } 
    catch(error){
        console.log(error)
    }
    finally{
        setLoading(false)
    }
};

if (loading) {
    return <h1>Se está generando su orden</h1>;
}

if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
}

return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
)
}


export default Checkout;


