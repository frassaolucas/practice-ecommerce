import { useState } from 'react';

import { useCart } from '@/hooks/cart';

import { UseShopItemProps } from './ShopItem.types';

export const useShopItem = ({ data }: UseShopItemProps) => {
  const productData = {
    ...data,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      data.price
    ),
  };

  const [quantity, setQuantity] = useState<number>(0);

  const { addToCart } = useCart();

  const handleChangeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    addToCart(productData.id, quantity);
  };

  return { productData, handleChangeQuantity, handleAddToCart };
};
