import { useEffect, useState } from 'react';

import { getProducts } from '@/services/products.services';

import { Product } from './Home.types';

export const useHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const productsList = await getProducts();

      setProducts(productsList);
    })();
  }, []);

  return {
    products,
  };
};
