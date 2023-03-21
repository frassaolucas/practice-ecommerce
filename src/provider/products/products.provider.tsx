import { createContext, useState } from 'react';

import { getProducts } from '@/services/products.services';

import {
  Product,
  ProductsContextValues,
  ProductsProviderProps,
} from './products.types';

export const ProductsContext = createContext<ProductsContextValues>(
  {} as ProductsContextValues
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts(): Promise<void> {
    const productsList = await getProducts();

    setProducts(productsList);
  }

  return (
    <ProductsContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
