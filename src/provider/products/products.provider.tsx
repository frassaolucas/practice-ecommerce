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

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async (): Promise<void> => {
    const productsList = await getProducts();

    setProducts(productsList);
  };

  return (
    <ProductsContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
