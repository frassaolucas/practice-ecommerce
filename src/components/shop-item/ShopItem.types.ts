export type ShopItemProps = {
  product: ProductData;
};

export type UseShopItemProps = ShopItemProps;

type ProductData = {
  id: number;
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
};
