import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className=" relative">
      <ShoppingIcon className="w-10 h-10 text-white" />
      <span className="absolute w-10 h-10 top-3.5 left-0">
        <div className="flex justify-center items-center font-extrabold">
          12
        </div>
      </span>
    </div>
  );
};

export default CartIcon;
