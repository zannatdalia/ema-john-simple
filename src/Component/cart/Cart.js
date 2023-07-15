import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product)=> total+product.price, 0);
    let shipping = 0;

    if (total >35){
        shipping =0;
    }else if (total> 15){
        shipping = 4.99
    }else if (total>0){
        shipping =12.99
    }
    const tax = (total/10);
    const grandTotal = (total+ Number(tax)+shipping);

    const formatNumber = number => {
        const precision =  number.toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered : {cart.length}</h4>
            <h4>Shipping: {shipping}</h4>
            <h4>Product price : {formatNumber(total)}</h4>
            <h4>Tax : {formatNumber(tax)}</h4>
            <h4>Total price : {formatNumber(grandTotal)}</h4>
        </div>
    );
};

export default Cart;