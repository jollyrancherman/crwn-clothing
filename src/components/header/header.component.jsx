import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../ulils/firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const signOutHandler = () => {
    signOutUser();
    setCurrentUser(null);
  };

  const handleSetIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className=" bg-gray-800 p-6 flex justify-between items-center shadow mb-2 text-gray-50">
      <Link className="logo-container" to="/">
        <div className="logo">
          <CrwnLogo />
        </div>
      </Link>

      <div className="navigation-links flex grow flex-row-reverse gap-12 pr-16">
        {currentUser ? (
          <button onClick={signOutHandler}>Sign Out</button>
        ) : (
          <Link className="nav-link" to="/authorization">
            SIGN IN
          </Link>
        )}

        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>

      <div
        className="clothing-cart cursor-pointer"
        onClick={handleSetIsCartOpen}
      >
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </div>
    </header>
  );
};

export default Header;
