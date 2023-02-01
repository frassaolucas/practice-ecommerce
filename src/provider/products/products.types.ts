import { ReactNode } from 'react';

export type ProductsContextValues = {
  products: Product[];
  loadProducts: () => Promise<void>;
};

export type ProductsProviderProps = {
  children: ReactNode;
};

export type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
};
