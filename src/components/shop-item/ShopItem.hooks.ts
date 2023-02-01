import { useCart } from '@/hooks/cart/cart.hooks';

import { UseShopItemProps } from './ShopItem.types';

export const useShopItem = ({ data }: UseShopItemProps) => {
  const productData = {
    ...data,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      data.price
    ),
  };

  const { addToCart } = useCart();

  const handleChangeQuantity = (productId: number, quantity: number) => {
    addToCart(productId, quantity);
  };

  return { productData, handleChangeQuantity };
};
