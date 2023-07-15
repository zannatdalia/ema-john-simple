import React, {useState} from 'react';
import fakeData from "../../fakeData/products"
import './Shop.css'
import Product from "../product/Product";
import Cart from "../cart/Cart";
const Shop = () => {
    const firstTenProducts = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstTenProducts)
    const [cart ,setCart] = useState([])
    const handleProduct = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className= "shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product =>
                            <Product product = {product} handleProduct={handleProduct} >
                        </Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;