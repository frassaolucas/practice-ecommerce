import { ReactNode } from 'react';

export type CartContextValues = {
  cartList: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
};

export type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};
