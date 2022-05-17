import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productcard';
import { useSelector } from "react-redux";

const Products = () => {

    const items = useSelector((state)=>state.cart)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            setProducts(res.data);
        })
    }, []);

    return (
        <div>
            <h1>Here goes the products</h1>
            <div className="cart-show">
                <h4><span className='cartCount'>Cart items:{items.length}</span></h4>
            </div>
            <div className="product-content">
           
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard key={index} product={product} />
                        )
                    })
                }
             </div>
        </div>
    )
}


export default Products;