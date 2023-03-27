import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  
  const { name, img, manufacturer, quantity, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <h6 className='product-name'>{name}</h6>
      <p>Price:${price}</p>
      <h6>Manufacturer:{seller}</h6>
      <p>Rating:{ratings} stars</p>
      </div>
    <button onClick={()=>handleAddToCart(props.product)} className='button-cart' >Add to cart<FontAwesomeIcon icon={faCartShopping} /></button> 
    </div>
  );
};

export default Product;