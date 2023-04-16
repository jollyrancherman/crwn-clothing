import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className='group m-0'>
      <div
        className='h-96 shadow'
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=' h-full flex flex-col justify-end p-10 invisible group-hover:visible'>
          <Button buttonType='inverted' onClick={addItemToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
      <div className=' flex justify-between'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
