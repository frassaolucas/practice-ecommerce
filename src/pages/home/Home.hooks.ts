import { useEffect, useState } from 'react';

import { getProducts } from '@/services/products.services';

import { Product } from './Home.types';

export const useHome = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const productsList = await getProducts();
      const productsListWithQuantity = productsList.map((product) => ({
        ...product,
        quantity: 1,
      }));

      setProducts(productsListWithQuantity);
    })();
  }, []);

  const onChangeProductQuantity = (quantity: number, productIndex: number) => {
    setProducts((prevState) => {
      const productsList = [...prevState];

      productsList[productIndex].quantity = quantity;

      return productsList;
    });
  };

  return {
    products,
    onChangeProductQuantity,
  };
};
