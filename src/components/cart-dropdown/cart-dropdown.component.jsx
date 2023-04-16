import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className=' absolute right-4 mt-4 shadow border border-slate-300 w-72  z-50 bg-slate-50 p-4'>
      <div className=''>
        <div className='cart-items text-slate-600 h-96 overflow-scroll'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <div className='flex justify-center'>
          <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
