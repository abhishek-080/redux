import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import { add } from './store/cart';
import { useDispatch } from 'react-redux';


const ProductCard = (props) => {

    const dispatch = useDispatch();

    const handleAdd=(product) =>{
        dispatch(add(product));
    }
    return (

        <div className="product-card">
            
            {/* make a card for product */}

            <div className="card">
                <div className="card-image">
                    <img src={props.product.image} alt="product" height="50px" width="50px" />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.product.title}</h3>
                    <p className="card-text">
                        Rs: {props.product.price}
                    </p>
                    <button><Link className='small' to={`/productdetail/${props.product.id}`}>Product details</Link> </button>
                    <button onClick={()=>handleAdd(props.product)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;