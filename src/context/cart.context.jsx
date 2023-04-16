import { createContext, useEffect, useState } from 'react';

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

const subtractCartItem = (item, cartItems) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

  // If item is not found.
  if (!itemExists) {
    return;
  }

  // if only one exists
  if (itemExists.quantity === 1) return deleteCartItem(item, cartItems);

  if (itemExists.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems;
};

const deleteCartItem = (item, cartItems) => {
  const updatedCartItems = cartItems.filter((cartItems) => {
    return cartItems.id != item.id;
  });
  console.log({ updatedCartItems });
  return updatedCartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  subtractItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(newCartCount);

    const newPrice = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );

    setTotalPrice(newPrice);
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(item, cartItems));
  };

  const deleteItemFromCart = (item) => {
    setCartItems(deleteCartItem(item, cartItems));
  };

  const subtractItemFromCart = (item) => {
    setCartItems(subtractCartItem(item, cartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    deleteItemFromCart,
    subtractItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
