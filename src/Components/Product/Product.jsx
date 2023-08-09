import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock,  } = props.product; 

    return (
        <div className='product'>
            <div className="productImg">
                <img src={img} alt="" />
            </div>
            <div className="productContent">
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <h3>$ {price}</h3>
                <p>Only {stock} left in stock - order soon</p>
                <button 
                onClick={() => props.handleAddProduct(props.product)}
                className='main-button'>
                    <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Add to cart</button>
            </div>
        </div>
    );
};

export default Product;