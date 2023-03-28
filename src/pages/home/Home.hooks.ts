import { useEffect } from 'react';

import { useProducts } from '@/hooks/products';

export function useHomePage() {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
  };
}
