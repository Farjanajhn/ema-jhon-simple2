import React from 'react';
import './Product.css';

const Product = (props) => {
  const {name,img,manufacturer,quantity,seller,ratings,price} = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <h6 className='product-name'>{name}</h6>
      <p>Price:{price}</p>
      <h6>Manufacturer:{seller}</h6>
      <p>Rating:{ratings} stars</p>
      </div>
      <button className='button-cart'>Add to cart</button>
    </div>
  );
};

export default Product;