import { ChangeEvent, useState } from 'react';

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

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const quantityValue = Number(event.target.value);
    setQuantity(quantityValue);
  };

  const handleAddToCart = () => {
    addToCart(productData.id, quantity);
  };

  return { productData, quantity, handleChangeQuantity, handleAddToCart };
};
