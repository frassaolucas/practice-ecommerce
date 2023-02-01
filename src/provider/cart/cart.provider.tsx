import { createContext, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { CartContextValues, CartItem } from './cart.types';

export const CartContext = createContext<CartContextValues>(
  {} as CartContextValues
);

export const CartProvider: React.FC = () => {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  const addToCart = (productId: number, quantity: number) => {
    setCartList((prevState) => [
      ...prevState,
      { id: productId, quantity: quantity },
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};
