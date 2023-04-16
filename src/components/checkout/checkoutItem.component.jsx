import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ item }) => {
  const { addItemToCart, deleteItemFromCart, subtractItemFromCart } =
    useContext(CartContext);

  const addProductHandler = () => {
    addItemToCart(item);
  };

  const subtractProductHandler = () => {
    subtractItemFromCart(item);
  };

  const deleteItemFromCartHandler = () => {
    deleteItemFromCart(item);
  };

  return (
    <tr key={item.id}>
      <td className=' text-center'>
        <img src={item.imageUrl} />
      </td>
      <td className=' text-center'>{item.name}</td>
      <td className='text-center'>
        <div className='flex justify-center items-center'>
          <ChevronLeftIcon
            onClick={subtractProductHandler}
            className='h-6 w-6'
          />
          <div className=' font-extrabold'>{item.quantity}</div>
          <ChevronRightIcon onClick={addProductHandler} className='h-6 w-6' />
        </div>
      </td>
      <td className=' text-center'>${item.price}</td>
      <td className=' text-center' onClick={deleteItemFromCartHandler}>
        Trash Icon
      </td>
    </tr>
  );
};

export default CheckoutItem;
