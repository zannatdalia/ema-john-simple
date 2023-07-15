import React from 'react';
import "./Cart.css"

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

            <table>
                <tr><td>Product price </td><td>:</td><td>  {formatNumber(total)}</td></tr>
                <tr><td>Shipping </td><td>:</td><td>  {shipping}</td></tr>
                <tr><td>Tax </td><td>:</td><td>  {formatNumber(tax)}</td></tr>
                <tr><td><h4>Total price</h4> </td><td>:</td><td>  <h4>{formatNumber(grandTotal)}</h4></td></tr>
            </table>
            <button className = "cart-button"> Review Your Order</button>

        </div>
    );
};

export default Cart;