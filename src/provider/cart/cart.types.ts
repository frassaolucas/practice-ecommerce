import { ReactNode } from 'react';

export type CartContextValues = {
  cartList: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
};

export type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};
