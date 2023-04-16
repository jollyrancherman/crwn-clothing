import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout/checkoutItem.component';

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className='check-out-container flex justify-center'>
      <table className='table-auto w-1/2 bg-gray-50'>
        <thead>
          <tr>
            <th className='w-1/5'>Product</th>
            <th className='w-1/5'>Description</th>
            <th className='w-1/5'>Quantity</th>
            <th className='w-1/5'>Price</th>
            <th className='w-1/5'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length ? (
            cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
          ) : (
            <tr>
              <td colSpan={5}>Your cart is empty</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CheckOut;
