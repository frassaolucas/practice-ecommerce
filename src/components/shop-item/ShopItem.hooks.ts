import { UseShopItemProps } from './ShopItem.types';

export const useShopItem = ({ data }: UseShopItemProps) => {
  const productData = {
    ...data,
    price: new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      data.price
    ),
  };

  return { productData };
};
