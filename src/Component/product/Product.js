import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>by: <small>{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className = "cart-button"
                        onClick={() => props.handleProduct(props.product)} >
                    <FontAwesomeIcon icon={faCartShopping} />add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;