import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

/*   console.log(cart); */

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
/*     console.log(product); */
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping; 
  }
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShipping + tax; 
  return (

    <div className='cart'>
      <h4>order summery</h4>
      <h4>selected items:{cart.length}</h4>
      <p>Total Price:${totalPrice}</p>
      <p>Total Shipping:{totalShipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;