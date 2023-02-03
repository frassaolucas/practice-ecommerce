import { useContext } from 'react';

import { CartContext, CartContextValues } from '@/provider/cart';

export function useCart(): CartContextValues {
  return useContext(CartContext);
}
