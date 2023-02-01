import { useContext } from 'react';

import { ProductsContext, ProductsContextValues } from '@/provider/products';

export const useProducts = (): ProductsContextValues => {
  return useContext(ProductsContext);
};
