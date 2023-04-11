import React from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className=" absolute right-4 mt-4 shadow border border-slate-300 w-72  z-50 bg-slate-50 p-4">
      <div className="">
        <div className="cart-items text-slate-600">test</div>
        <div className="flex justify-center">
          <Button>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
