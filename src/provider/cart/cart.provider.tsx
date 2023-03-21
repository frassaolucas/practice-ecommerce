import { createContext, useState } from 'react';

import { CartContextValues, CartItem, CartProviderProps } from './cart.types';

export const CartContext = createContext<CartContextValues>(
  {} as CartContextValues
);

export function CartProvider({ children }: CartProviderProps) {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  function addToCart(productId: number, quantity: number) {
    let cart = [...cartList];

    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      cart[productIndex].quantity += quantity;
    } else {
      cart = [...cart, { id: productId, quantity: quantity }];
    }

    setCartList(cart);
  }

  function updateQuantity(productId: number, quantity: number) {
    const updatedCartList = cartList.map((cartItem) => {
      if (cartItem.id === productId) {
        return {
          ...cartItem,
          quantity,
        };
      }

      return cartItem;
    });

    setCartList(updatedCartList);
  }

  function removeFromCart(productId: number) {
    const newCartList = cartList.filter(
      (cartItem) => cartItem.id !== productId
    );

    setCartList(newCartList);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
