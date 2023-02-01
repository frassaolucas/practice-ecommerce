import { useContext } from 'react';

import { CartContext, CartContextValues } from '@/provider/cart';

export const useCart = (): CartContextValues => {
  return useContext(CartContext);
};
