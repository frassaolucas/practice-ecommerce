import { createContext, useState } from 'react';

import { CartContextValues, CartItem, CartProviderProps } from './cart.types';

export const CartContext = createContext<CartContextValues>(
  {} as CartContextValues
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  const addToCart = (productId: number, quantity: number) => {
    let cart = [...cartList];

    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      cart[productIndex].quantity += quantity;
    } else {
      cart = [...cart, { id: productId, quantity: quantity }];
    }

    setCartList(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
