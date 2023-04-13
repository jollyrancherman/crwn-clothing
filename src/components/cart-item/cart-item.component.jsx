const CartItem = ({ cartItem }) => {
  const { quantity, name, price, imageUrl } = cartItem;
  return (
    <div className="flex gap-4 m-4">
      <div
        className="w-20 h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex flex-col justify-center">
        <h3>{name}</h3>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
