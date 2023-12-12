import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {
    return (
        <div>
            <p>{name}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            
        </div>
    );
};

export default CartItem;