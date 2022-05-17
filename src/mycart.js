import React from "react";
import { useSelector } from "react-redux";

const myCart = () => {

    const products= useSelector(state => state.cart);
    
    return (  
        <div>
            <h1>My Cart</h1>

            <div className="cardWrap">
                {
                    products.map(product=>{
                        console.log(product.price);
                        <div className="card">
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <h3>{product.price}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
 
export default myCart;