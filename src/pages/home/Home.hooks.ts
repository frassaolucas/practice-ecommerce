import { useEffect } from 'react';

import { useProducts } from '@/hooks/products';

export function useHome() {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
  };
}
