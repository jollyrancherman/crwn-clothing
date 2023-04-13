import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className=" relative">
      <ShoppingIcon className="w-10 h-10 text-white" />
      <span className="absolute w-10 h-10 top-3.5 left-0">
        <div className="flex justify-center items-center font-extrabold">
          {cartQuantity}
        </div>
      </span>
    </div>
  );
};

export default CartIcon;
