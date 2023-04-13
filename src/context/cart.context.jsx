import { createContext, useState } from "react";

const addCartItem = (item, cartItems) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(item, cartItems));
    setCartQuantity(cartQuantity + 1);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
