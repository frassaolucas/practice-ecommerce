import { useContext } from 'react';

import { ProductsContext, ProductsContextValues } from '@/provider/products';

export function useProducts(): ProductsContextValues {
  return useContext(ProductsContext);
}
