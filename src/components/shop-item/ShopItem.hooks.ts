import { useState } from 'react';

import { toast } from 'react-toastify';

import { useCart } from '@/hooks/cart';

import { UseShopItemProps } from './ShopItem.types';

export function useShopItem({ data }: UseShopItemProps) {
  const productData = {
    ...data,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      data.price
    ),
  };

  const [quantity, setQuantity] = useState<number>(0);

  const { addToCart } = useCart();

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(productData.id, quantity);

      toast.success('O item foi adicionado ao carrinho.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error('Adicione quantidade maior a zero.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return { productData, handleChangeQuantity, handleAddToCart };
}
