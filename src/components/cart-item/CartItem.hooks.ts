import { useState } from 'react';

import { useProducts } from '@/hooks/products';

import { CartItemProps } from './CartItem.types';

export function useCartItem({ product }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(product.quantity);

  const { products } = useProducts();

  const productInfo = products.find((item) => item.id === product.id)!;

  const cartItem = {
    id: productInfo.id,
    image: productInfo.image,
    name: productInfo.name,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      productInfo.price * quantity
    ),
    quantity,
  };

  const handleChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  return { cartItem, handleChangeQuantity };
}
